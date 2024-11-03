


// eslint-disable-next-line react/prop-types
const Orbital = ({ children, size, rotation }) => {
    return (
        
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40'>
            <div className='size-[835px] animate-spin [animation-duration:20s]'>
                <div className='flex items-center justify-start '
                    style={{
                        height: `${size}px`,
                        width: `${size}px`,
                        transform: `rotate(${rotation}deg)`
                    }}>
                    <div className="inline-flex" style={{ transform: `rotate(${rotation})` }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Orbital;