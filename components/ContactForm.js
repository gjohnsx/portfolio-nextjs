import { useState } from "react";

const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
        setValue(event.target.value)
        console.log(event.target.value);   
    }
  
    return {
      type,
      value,
      onChange
    };
};

export default function ContactForm() {
    const name = useField('text');
    const email = useField('email');
    const message = useField('textarea');

    return (
        <div className="flex-col lg:flex-row lg:w-1/2 mx-auto">
            <form
                className="isolate -space-y-px rounded-md shadow-sm text-gray-700"
                action="/api/form"
                method="post"
            >
                <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600">
                    <label htmlFor="name" className="block text-sm font-medium">
                    Name
                    </label>
                    <input
                        {...name}
                        name="name"
                        id="name"
                        className="block w-full border-0 p-1 rounded focus:ring-0 sm:text-sm"
                        placeholder="Your name..."
                        required
                    />
                </div>

                <div className="relative border border-b-0 border-gray-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-700 focus-within:border-sky-700">
                    <label htmlFor="job-title" className="block text-sm font-medium">
                    Email
                    </label>
                    <input
                        {...email}
                        name="email"
                        id="email"
                        className="block w-full border-0 p-1 rounded focus:ring-0 sm:text-sm"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div className="relative border border-b-0 border-gray-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-700">
                    <label htmlFor="comment" className="block text-sm font-medium">
                        Your message
                    </label>
                    <div className="mt-1">
                        <textarea
                            {...message}
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-sky-700 border-gray-300 focus:border-sky-700 block w-full sm:text-sm rounded-md"
                            required
                        />
                    </div>
                </div>

                <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-700">
                    <div className="mt-1">
                        <button
                            type='submit'
                            name="comment"
                            id="comment"
                            className="flex mx-auto px-20 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                            >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};