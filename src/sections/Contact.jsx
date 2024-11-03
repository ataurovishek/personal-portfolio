import { GoArrowUpRight } from "react-icons/go";
import grainImg from '../assets/images/grain.jpg'

const Contact = () => {
    return (
        <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="Footer">
            <div className="container">
                <div className="z-0 text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 -z-10" style={{ background: `URL(${grainImg})` }}></div>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div>
                            <h2 className="font-exception text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next project to life? Lets&apos;s connect and discuss how I can help you achieve your goals
                            </p>
                        </div>
                        <div>
                            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-3xl gap-2 w-max border border-gray-900">
                                <span className="font-semibold">Contact Me</span>
                                <GoArrowUpRight className="size-4" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;