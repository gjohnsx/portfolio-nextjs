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

const handleSubmit = (event) => {
    console.log('submitting form');
};

export default function ContactForm() {
    const name = useField('text');
    const email = useField('email');
    const message = useField('textarea');

    return (
        <div className="flex-col lg:flex-row w-1/2 mx-auto">
            <form
                className="isolate -space-y-px rounded-md shadow-sm"
                onSubmit={handleSubmit}
            >
                <div className="relative border border-neutral rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
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

                <div className="relative border border-b-0 border-neutral px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
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

                <div className="relative border border-b-0 border-neutral px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-primary">
                    <label htmlFor="comment" className="block text-sm font-medium">
                        Your message
                    </label>
                    <div className="mt-1">
                        <textarea
                            {...message}
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-primary border-neutralfocus:border-primary block w-full sm:text-sm rounded-md"
                            required
                        />
                    </div>
                </div>

                <div className="relative border border-neutral rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-primary">
                    <div className="mt-1">
                        <button
                            type='submit'
                            rows={4}
                            name="comment"
                            id="comment"
                            className="btn btn-primary shadow-sm focus:ring-primary border border-transparent focus:border-primary block w-full sm:text-sm"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};