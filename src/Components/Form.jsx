import { useRef } from "react";
import emailjs from '@emailjs/browser'
const Form = () => {
    const nameRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: nameRef.current.value,
            message: messageRef.current.value
        }
        const service_id = import.meta.env.VITE_SERVICE_ID;
        const template_id = import.meta.env.VITE_TEMPLATE_ID;
        const public_key = import.meta.env.VITE_PUBLIC_ID;

        emailjs.init(public_key);

        emailjs.send(service_id, template_id, templateParams)
            .then((response) => {
                console.log('SUCCESS', response.status);
            })
            .catch((error) => {
                console.log(error, 'Failed');
            });
    };

    return (
        <div className="w-2/5 mx-auto relative bg-gray-800/50 mt-12 mb-12 rounded-lg p-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold tracking-tight text-white">Contact</h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Email address</label>
                        <div className="mt-2">
                            <input id="name" ref={nameRef} name="name" type="text" placeholder="Enter Your Name" required className="block w-full rounded-md border-0 p-3 outline-none bg-gray-700 text-white sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                        </div>
                        <div className="mt-2">
                            <textarea id="message" ref={messageRef} name="message" placeholder="Write your message here" className="w-full p-3 rounded-md bg-gray-700 text-white sm:text-sm"></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex mx-auto px-12 justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;