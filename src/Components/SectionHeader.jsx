/* eslint-disable react/prop-types */


const SectionHeader = ({ title, eyebrow, description }) => {
     
    return (
        <>
            <div className='flex justify-center'>
                <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
                    {eyebrow}
                </p>

            </div>
            <h3 className='font-exception text-3xl text-center mt-6'>{title}</h3>
            <p className='text-center text-white/60 mt-4 max-w-md mx-auto md:text-md sm:text-sm'>{description}</p>
        </>
    );
};

export default SectionHeader;