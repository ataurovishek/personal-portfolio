import memojiAvatar1 from '../assets/images/memoji-avatar-1.png'
import memojiAvatar2 from '../assets/images/memoji-avatar-1.png'
import memojiAvatar3 from '../assets/images/memoji-avatar-3.png'
import memojiAvatar4 from '../assets/images/memoji-avatar-4.png'
import memojiAvatar5 from '../assets/images/memoji-avatar-5.png'
import Card from './Card'


const testimonials =
    [
        {
            name: "Dr. Anya Petrova",
            position: "Product Manager @Arm Technologies",
            text: "Working with ovishk was a game-changer for our business. His expertise in web development was invaluable. Thanks to his hard work, our website now looks well. I highly recommend ataur to anyone looking for a talented and reliable web developer.",
            avatar: memojiAvatar5
        },
        {
            name: 'Ben White',
            position: 'Marketing Manager @ NeuroGen',
            text: "Ataur is a true asset to our team. He consistently deliver high-quality work and always go above and beyond to meet our needs. We're grateful to have had the opportunity to work with him.",
            avatar: memojiAvatar1
        },
        {
            name: "Chrish Green",
            position: "Head of Design @ GreenLeaf",
            text: "Working with Ataur was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
            avatar: memojiAvatar4,
        },
        {
            name: "Emily Carter",
            position: "Product Manager @ GlobalTech",
            text: "Ataur is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
            avatar: memojiAvatar3,
        },
        {
            name: "Olivia Kahn",
            position: "Product Manager @ GlobalTech",
            text: "Working with Ataur was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
            avatar: memojiAvatar2,
        },

    ]


const testimonialBio = () => {
    return (
        <div className='mt-20 flex [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)] sm:[mask-image:linear-gradient(to_left,transparent,black_20%,black_90%,transparent)]'>
            <div className='flex gap-8 flex-none'>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <div key={index} className='flex gap-8 justify-start p-2 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]'>
                        {
                            testimonials.map((testimonial) => (
                                <Card key={testimonial.name} className="max-w-sm md:max-w-md md:p-5 hover:-rotate-3">
                                    <div className="flex gap-4 items-center">
                                        <div className='size-14 bg-gray-700 rounded-full'>
                                            <img src={testimonial.avatar} alt={testimonial.name} />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='font-semibold'>{testimonial.name}</div>
                                            <div className='text-sm text-white/40'>{testimonial.position}</div>
                                        </div>
                                    </div>
                                    <p className='mt-4 md:mt-6 text-sm md:text-base'>{testimonial.text}</p>
                                </Card>
                            ))
                        }</div>
                ))}
            </div>
        </div>
    );
};

export default testimonialBio;