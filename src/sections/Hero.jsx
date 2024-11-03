import memoImg from '../assets/images/memoji-computer.png';
import grainImg from '../assets/images/grain.jpg'

import Orbital from '../Components/Orbital';
import HeroButtons from './../Components/heroButtons';
import sparkleIcon from '../assets/icons/sparkle.svg'
import { GiPolarStar } from "react-icons/gi";
const Hero = () => {
    return (
        <div className='py-32 md:py-52 lg:py-68 relative overflow-x-clip'>
            <div className='absolute inset-0 opacity-15 ' style={{ backgroundImage: `url(${grainImg}),` }}>
                <div className='absolute inset-0  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>

                    <div className='size-[620px] hero-ring'></div>
                    <div className='size-[820px] hero-ring'></div>
                    <div className='size-[1020px] hero-ring'></div>
                    <div className='size-[1220px] hero-ring'></div>
                    <Orbital size={930} rotation={-32} >
                        <GiPolarStar className='size-28 animate-spin [animation-duration:5s] text-[#00FF9C]' />
                    </Orbital>
                    <Orbital size={250} rotation={20}>
                        <GiPolarStar className='size-12 animate-spin [animation-duration:5s] text-[#00FF9C]' />
                    </Orbital>
                    <Orbital size={590} rotation={98}>
                        <GiPolarStar className='size-8 animate-spin [animation-duration:5s] text-[#00FF9C]' />
                    </Orbital>
                    <Orbital size={620} rotation={-8}>
                        <GiPolarStar className='size-8 animate-spin [animation-duration:5s] text-[#00FF9C]' />
                    </Orbital>
                    <Orbital size={1000} rotation={160}>
                        <GiPolarStar className='size-8 animate-spin [animation-duration:5s] text-[#00FF9C]' />
                    </Orbital>
                    <Orbital size={850} rotation={130}>
                    <GiPolarStar className='size-8 animate-spin [animation-duration:5s] text-[#00FF9C]'/>
                    </Orbital>
                    <Orbital size={850} rotation={570}>
                    <GiPolarStar className='size-16 animate-spin [animation-duration:5s] text-[#00FF9C]'/>
                    </Orbital>
                    <Orbital size={220} rotation={888}>
                    <GiPolarStar className='size-4 animate-spin [animation-duration:5s] text-[#00FF9C]'/>
                    </Orbital>
                    <Orbital size={820} rotation={-255}>
                        <GiPolarStar className='size-28 animate-spin [animation-duration:5s] text-[#00FF9C] '/>
                    </Orbital>

                    <Orbital size={620} rotation={-40}>
                        <img src={sparkleIcon} alt="start icon" className=' size-4 animate-spin [animation-duration:5s]' />
                    </Orbital>
                </div>


            </div>
            <div className="container">
                <div className='flex flex-col items-center'>
                    <img src={memoImg} className='size-[100px]' alt="person sitting with mackbook" />
                    <div className='bg-gray-950 border border-gray-800 outline-none px-4 py-1.5 inline-flex items-center gap-4 rounded-2xl'>
                        <div className='bg-newMint size-2 rounded-full  relative'>
                            <div className='bg-newMint size-2 rounded-full animate-ping-large absolute inset-0'></div>
                        </div>
                        <div className='text-md font-medium bg-transparent  text-mint'>Contact me for the new project</div>
                    </div>
                </div>

                <h1 className='font-exception text-3xl text-center mt-8 tracking-wide  md:text-5xl'>Developing Exceptional <br /> user engagement</h1>
                <p className='mt-4 text-center text-white/60 '>Crafting seamless digital experiences From concept to code<br /> I deliver full-stack solutions that exceed expectations.</p>
                <HeroButtons />
            </div>

        </div>
    );
};

export default Hero;