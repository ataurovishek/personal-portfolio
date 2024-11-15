import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const footerLinks =
    [
        {
            title: 'GitHub',
            href: import.meta.env.VITE_GITHUB,
            icon: FaGithub
        },
        {
            title: 'Twitter',
            href: import.meta.env.VITE_TWITTER,
            icon: FaTwitter,
        },
        {
            title: 'Instagram',
            href: import.meta.env.VITE_INSTAGRAM,
            icon: FaInstagram
        },
        {
            title: 'Linkedin',
            href: import.meta.env.VITE_LINKEDIN,
            icon: FaLinkedin
        },
    ]


// console.log(footerLinks);


const Footer = () => {
    return (
        <footer className="relative  overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_30%_at_bottom_center,black,transparent)] -z-10"></div>
            <div className="container">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">

                    <div className="text-white/40">&copy; 2024. All rights reserved</div>
                    <nav className="flex flex-col md:flex-row  items-center gap-8 ">
                        {
                            footerLinks.map(footer => (
                                <a href={footer.href} key={footer.title} target="__blank" className="inline-flex items-center gap-1.5 cursor-pointer">
                                    <span className="font-light text-sm font-normal">{footer.title}</span>
                                    <footer.icon className="size-5" />
                                </a>
                            ))
                        }


                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;