import { twMerge } from 'tailwind-merge';
import star from '../assets/icons/star.svg'
// eslint-disable-next-line react/prop-types
const CardHeader = ({title,description,className}) => {
    const Title = title;
    const Description = description;
    return (

        <div className={twMerge("flex flex-col",className)}>
            <div className="inline-flex gap-2">
                <img src={star} alt="star" className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">{Title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{Description}</p>

        </div>

    );
};

export default CardHeader;