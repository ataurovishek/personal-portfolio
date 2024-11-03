import arrowDown from '../assets/icons/arrow-down.svg';
const heroButtons = () => {
    return (
    
             <div className='flex flex-col md:flex-row gap-3 items-center md:justify-center mt-8'>
                    <button className='inline-flex items-center gap-2 border border-white/15 px-4 h-12 rounded-xl'>
                        <span className='font-semibold text-sm'>Discover My Endeavors</span>
                        <img src={arrowDown} alt="" className='size-4' />
                    </button>
                    <button className='inline-flex items-center gap-3 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
                        <span>🙋‍♂️</span>
                        <span className='text-gray-900 text-sm font-semibold'>Let&apos;s collaborate</span>
                    </button>
                </div>
    );
};

export default heroButtons;