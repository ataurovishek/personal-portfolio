import { GiJusticeStar } from "react-icons/gi";

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable"
]
const Tape = () => {
    return (
        <div className="py-16 lg:py-24 overflow-x-hidden pointer-events-none">
            <div className="bg-gradient-to-r from-emerald-300 flex to-sky-400 -rotate-3 -mx-1">
                <div className="flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 60%, transparent)' }}>
                    <div className="flex flex-none gap-6 py-4 pr-4 animate-move-left [animation-duration:10s]">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <div key={idx}>
                                {words.map(word => (
                                    <div key={word} className="inline-flex w-[180px] items-center gap-2 justify-center">
                                        <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                                        <GiJusticeStar className="text-gray-900 -rotate-12 size-6" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tape;