import { BlogList } from '../../../components/BlogList';
import { TestimonialSlider } from '../../../components/TestimonialSlider';

export function BlogAndTestimonial() {
  return (
    <div className='bg-[#F0FBFA]'>
      <div className='xl:w-[30%] md:w-[40%]'>
        <BlogList />
      </div>
      <div className='xl:w-[70%] md:w-[60%] pt-6 md:pt-0 container'>
        <h2 className='pb-3 text-2xl font-medium lg:pl-36 md:pl-16 md:text-3xl md:pb-8'>
          What Our Guests say{' '}
        </h2>
        <TestimonialSlider />
      </div>
    </div>
  );
}
