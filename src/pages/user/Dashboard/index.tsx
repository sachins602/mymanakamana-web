import { PopularTours } from '../../../components/PopularTours';
// import { MajorDestination } from '../../../components/MajorDestination';
import { BestSeller } from '../../../components/BestSeller';
import { BlogAndTestimonial } from '../BlogAndTestimonial';
import { Whyus } from '../../../components/Whyus';

export function Dashboard() {
  return (
    <div className='w-full'>
      {/* first image */}
      <img className='w-full h-[450px]' src='/homecover.png' />
      {/* about us */}
      <div className='grid items-center m-10 border place-items-center lg:grid-cols-2 md:p-6 md:shadow-lg shadow-black/20'>
        <div className=''>
          <h1 className='py-3 text-2xl font-semibold md:text-3xl md:pb-10 md:pt-5'>
            {' '}
            <span className='text-green-500'>Mai Manakamana</span> Travels and
            Tours
          </h1>
          <p className='text-sm text-justify'>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
            bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
            magna. Nam metus l. Curabitur tempor quis eros tempus lacinia. Nam
            bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
            magna. Nam metus l.
          </p>
        </div>
        <div className='order-first md:order-last'>
          <img src='/about.png' />
        </div>
      </div>
      {/* popular pacakages */}
      <PopularTours />
      {/* major destination */}
      {/* <MajorDestination /> */}
      {/* best seller */}\
      <BestSeller />
      <Whyus />
      {/* blog and testimonial */}
      <BlogAndTestimonial />
    </div>
  );
}
