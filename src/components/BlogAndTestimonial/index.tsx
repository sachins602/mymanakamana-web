import { BlogList } from "../BlogList";
import { TestimonialSlider } from "../TestimonialSlider";

export function BlogAndTestimonial() {
  return (
    <div className='bg-[#F0FBFA]'>
      <div className='xl:w-[30%] md:w-[40%]'>
        <BlogList />
      </div>
      <div className='xl:w-[70%] md:w-[60%] pt-6 md:pt-0 container'>
        <h2 className='lg:pl-36 md:pl-16 md:text-3xl text-2xl font-medium md:pb-8 pb-3'>What Our Guests say </h2>
        <TestimonialSlider />
      </div>

    </div>
  )
}