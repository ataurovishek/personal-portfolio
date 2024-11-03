import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiHono } from "react-icons/si";
import { SiBun } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { twMerge } from "tailwind-merge";

const toolboxItems = [
    {
        title: 'Html',
        icontype: FaHtml5
    },
    {
        title: 'Css',
        icontype: FaCss3Alt
    },
    {
        title: 'Javascript',
        icontype: SiJavascript
    },
    {
        title: 'React',
        icontype: FaReact
    },
    {
        title: 'NodeJs',
        icontype: FaNode
    },
    {
        title: 'Express.js ',
        icontype: SiExpress
    },
    {
        title: 'MongoDB',
        icontype: SiMongodb
    },
    {
        title: 'Typescript',
        icontype: SiTypescript
    },
    {
        title: 'Jquery',
        icontype: SiJquery
    },
    {
        title: 'Bootstrap',
        icontype: FaBootstrap
    },
    {
        title: 'Saas',
        icontype: FaSass
    },
    {
        title: 'React Bootstrap',
        icontype: SiReactbootstrap
    },
    {
        title: 'Tailwind Css',
        icontype: RiTailwindCssFill
    },
    {
        title: 'Firebase',
        icontype: IoLogoFirebase
    },
    {
        title: 'Next.js',
        icontype: SiNextdotjs
    },
    {
        title: 'PHP',
        icontype: FaPhp
    },
    {
        title: 'Laravel',
        icontype: FaLaravel
    },
    {
        title: 'Redux Toolkit',
        icontype: SiRedux
    },
    {
        title: 'Socket Io',
        icontype: SiSocketdotio
    },
    {
        title: 'Docker',
        icontype: FaDocker
    },
    {
        title: 'GitHub',
        icontype: FaGithub
    },
    {
        title: 'Jira',
        icontype: SiJira
    },
    {
        title: 'PostgreSQL',
        icontype: BiLogoPostgresql
    },
    {
        title: 'MySQL',
        icontype: GrMysql
    },
    {
        title: 'Hono JS',
        icontype: SiHono
    },
    {
        title: 'Bun',
        icontype: SiBun
    },
    {
        title: 'GraphQL',
        icontype: GrGraphQl
    },


]


const skillTools = ({ className, classNameWrapper }) => {
    return (

        <>

            {/* this is an special types of element which is use to add linear colour in svg and react icons  */}

            <svg className="size-0 absolute">
                <linearGradient id="blue-gradient">
                    <stop offset="0%" stopColor="#4E65FF " />
                    <stop offset="100%" stopColor="#92EFFD" />
                </linearGradient>
            </svg>

            {/* here teMerge is used to merge duplicate tailwind icons  */}

            <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
                <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", classNameWrapper)}>
                    {[...new Array(2)].fill(0).map((_, index) => (

                        <div key={index} className=" flex gap-6">
                            {
                                toolboxItems.map(item => (
                                    <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                        <span><item.icontype className="size-10 fill-[url(#blue-gradient)]" /></span>
                                        <span className="font-semibold">{item.title}</span>
                                    </div>
                                ))}
                        </div>
                    ))}




                </div>
            </div>
        </>
    );
};

export default skillTools;