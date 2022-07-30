import { useState } from "react";
import { Switch } from '@headlessui/react';
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const useField = (type) => {
    const [value, setValue] = useState('');
  
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
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState("Send");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const toggleAgreed = () => {
        setAgreed(prevAgreed => !prevAgreed);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");

            const res = await fetch("/api/form", {
                body: JSON.stringify({
                    email: email,
                    name: name,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
      
            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        } 
    };

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (name.value.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (email.value.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (message.value.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }
        if (!agreed) {
          tempErrors["agreed"] = true;
          isValid = false;
        }
    
        setErrors({ ...tempErrors });
        console.log("Errors:", errors);
        return isValid;
    };

    return (
        <div className="flex-col lg:flex-row lg:w-1/2 mx-auto">
            <form
                className="isolate -space-y-px rounded-md shadow-sm text-gray-700"
                onSubmit={handleSubmit}
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
                    />
                    {errors.name && <p className="text-red-500 text-xs">Name cannot be empty</p>}
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
                    />
                    {errors.email && <p className="text-red-500 text-xs">Email cannot be empty</p>}
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
                        />
                    </div>
                    {errors.message && <p className="text-red-500 text-xs">Message cannot be empty</p>}
                </div>


                <div className="relative border-l border-r border-gray-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-700">
                    <div className="sm:col-span-2">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                            <Switch
                                checked={agreed}
                                onChange={toggleAgreed}
                                className={classNames(
                                agreed ? 'bg-sky-800' : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                aria-hidden="true"
                                className={classNames(
                                    agreed ? 'translate-x-5' : 'translate-x-0',
                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                )}
                                />
                            </Switch>
                            </div>
                            <div className="ml-3">
                            <p className="text-base text-gray-500">
                                By selecting this, you agree to the{' '}
                                <Link href='/privacy'>
                                    <a target="_blank" className="font-medium text-gray-700 underline">
                                        Privacy Policy
                                    </a>
                                </Link>
                                {' '}and{' '}
                                <Link href='/cookies'>
                                    <a target="_blank" className="font-medium text-gray-700 underline">
                                        Cookie Policy
                                    </a>
                                </Link>
                                .
                            </p>
                            </div>
                        </div>
                    </div>
                    {errors.agreed && <p className="text-red-500 text-xs">You must agree in order to send</p>}
                </div>

                <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-700">
                    <div className="mt-1">
                        <button
                            type='submit'
                            name="comment"
                            id="comment"
                            className="flex mx-auto px-20 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                            >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};