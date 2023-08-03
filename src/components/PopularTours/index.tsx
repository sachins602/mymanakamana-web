import { AiOutlineClockCircle, AiFillStar } from 'react-icons/ai';
import { Button } from '../ui/button';

export function PopularTours() {
  const popularList = [
    {
      title: 'Everest Base Camp',
      Duration: '18 days',
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 11,
      avg_star_count: 5,
    },
    {
      title: 'Mardi Himal Trek',
      Duration: '9 days',
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 16,
      avg_star_count: 5,
    },
    {
      title: 'Everest Base Camp',
      Duration: '8 days',
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 169,
      avg_star_count: 5,
    },
  ];
  return (
    <div className='md:py-16 py-8 bg-[#F0FBFA]'>
      <h2 className='pb-12 text-2xl font-semibold text-center'>
        Popular <span className='text-green-500'>Tour Packages</span>
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-11'>
        {popularList.map((destination, i) => {
          return (
            <div
              key={`${destination.title}${i}`}
              className=' shadow-[0_3px_10px_rgb(0,0,0,0.4)]'
            >
              <div>
                <img src='/about.webp' />
              </div>
              <div className='px-4 pt-2 pb-4 text-sm bg-white'>
                <h5 className='text-base font-semibold'>
                  {' '}
                  {destination.title}{' '}
                </h5>
                <p className='flex items-center py-4 text-xs'>
                  {' '}
                  <AiOutlineClockCircle className='text-base' />{' '}
                  <span> Duration: {destination.Duration}</span>{' '}
                </p>
                <div className='flex flex-row'>
                  <div className='pb-5'>
                    <h6 className='font-medium pb-1.5'>Starting From</h6>
                    <h5>
                      <span className='text-[#B3510A] font-semibold'>
                        US ${destination.original_price_US}
                      </span>{' '}
                      <span className='line-through decoration-slate-400'>
                        US ${destination.discounted_price_US}{' '}
                      </span>
                    </h5>
                  </div>
                  <div className='pl-4'>
                    <div className='flex pb-2 text-lg text-yellow-500'>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <p>Based on {destination.review_count} Reviews </p>
                  </div>
                </div>
                <Button className='px-9'>View Details</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
