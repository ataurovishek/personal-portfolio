// ES6 format
import Card from "../Components/Card";
import SectionHeader from "../Components/SectionHeader";
import cleanCode from '../assets/images/cleanCode.png';
import BookCover from '../assets/images/book-cover.png'
import SkillTools from "../Components/skillTools";
import smileEmoji from "../assets/images/memoji-smile.png";
import CardHeader from "../Components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";



const hobbies = [{ title: "Coding", emoji: '💻', top: '60%', left: '60%' }, { title: "traveling", emoji: '✈️', top: '25%', left: '5%' }, { title: "Badminton", emoji: '🏸', top: '0%', left: '50%' }, { title: "Football", emoji: '🎨', top: '35%', left: '50%' }, { title: "Martial Arts:", emoji: '🥋', top: '55%', left: '5%' }, { title: "Cricket", emoji: '🏏', top: '80%', left: '30%' }, { title: "Racing", emoji: '🏁', top: '0%', left: '5%' }]

const About = () => {

    const constrainRef = useRef(null)
    return (
        <div className="py-16" id="About">
            <div className="container">

                <SectionHeader eyebrow="About Me"
                    title="A Glimpse Of My Development World"
                    description="Learn more about who I am, What I do, and what inspires me"
                />
                <div className="mt-20 flex flex-col gap-6">
                    <div className="md:grid md:grid-cols-2 md:gap-5 sm:flex sm:flex-col sm:gap-5">
                        <Card className='flex flex-col gap-5 group' >
                            <div className="h-[320px] flex flex-col">
                                <CardHeader description="Explore the Books of coding" title="My Reads" />
                                <div className="w-40 mx-auto mt-8 ">
                                    <img src={cleanCode} alt="Book cover" className="group-hover:scale-110 rounded-xl duration-300" />
                                </div>
                            </div>

                        </Card>
                        <Card className='group'>
                            <div className="flex flex-col h-[323px]">
                                <CardHeader title="My Reads" description="Explore the books shaping my perspective" />
                                <div className="w-40 mx-auto mt-8 size-[70%]">
                                    <img src={BookCover} alt="Book cover" className="size-full group-hover:scale-110 rounded-xl duration-300" />
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="h-[320px] p-0">

                        <div>
                            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to create digital experience" className="px-6 pt-6" />
                        </div>

                        <div>
                            <SkillTools className="mt-6" classNameWrapper="animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]" />
                            <SkillTools className="mt-6 translate-x-10" classNameWrapper="animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]" />
                        </div>

                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-7 ">

                        <Card className="p-0 flex flex-col h-[380px] col-span-3 ">

                            <div>
                                <CardHeader title="Beyond The Code" description="Explore my interests and hobbies beyond the digital realm" className="px-6 py-6" />
                            </div>

                            <div className="relative flex-1 pb-2" ref={constrainRef}>

                                {
                                    hobbies.map(hobbie => (

                                        <motion.div key={hobbie.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] rounded-full py-1.5 absolute" style={{ left: hobbie.left, top: hobbie.top }} drag dragConstraints={constrainRef} whileHover={{scale:1.1}} >

                                            <span className="font-medium text-gray-950">{hobbie.title}</span>
                                            <span>{hobbie.emoji}</span>

                                        </motion.div>
                                    ))
                                }

                            </div>
                        </Card>

                        <Card className="p-0 h-[380px] w-full md:col-span-2 sm:col-span-3">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d60739.89095702868!2d91.9982138!3d21.4280049!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1729885103878!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full object-cover rounded-2xl relative" />

                            <div className="absolute top-1/2 left-1/2 translate-x-[-150%] -translate-y-[70%] size-16 bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-white after:outline-offset-0 after:rounded-full">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] -z-20 animate-ping [animation-duration:1s]"></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] -z-10"></div>
                                <img src={smileEmoji} alt="smile emoji" />

                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;