import grainImg from '../assets/images/grain.jpg'
import {twMerge} from "tailwind-merge";
// eslint-disable-next-line react/prop-types,
const Card = ({className,children}) => {
    return (
        <div className={twMerge("bg-gray-800 rounded-3xl relative after:-z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:rounded-3xl after:outline-white/20 p-6",className)}>
            <div className='absolute inset-0 opacity-5' style={{ backgroundImage: `url(${grainImg})` }}></div>
            {children}
        </div>
    );
};

export default Card;