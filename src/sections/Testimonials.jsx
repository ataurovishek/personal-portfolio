import SectionHeader from './../Components/SectionHeader.jsx';
import TestimonialBio from '../Components/testimonialBio.jsx';
const Testimonials = () => {
    return (
        <div className='py-16 lg:py-24'>
            <div className='container'>
                <SectionHeader eyebrow="Satisfied Clients" title="Client&apos;s Opinions About Me" description="Just Dont&apos;t take my word See wha clients say about my work" />
                <TestimonialBio/>
            </div>

        </div>

    );
};



export default Testimonials;