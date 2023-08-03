import { AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '../ui/button';
export function BestSeller() {
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
    <div className='bg-[#F0FBFA] py-16'>
      <h2 className='pb-12 text-2xl font-semibold text-center'>
        Our Best Selling Packages
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-11'>
        {popularList.map((destination, i) => {
          return (
            <div
              key={`best-seller-${destination.title}${i}`}
              className=' shadow-[0_3px_10px_rgb(0,0,0,0.4)]'
            >
              <div className='relative'>
                <img src='/mountain.jpeg' />
                <span className='absolute px-4 py-2 font-semibold text-white bg-green-400 top-5'>
                  {' '}
                  {destination.Duration}{' '}
                </span>
              </div>
              <div className='px-4 pt-2 pb-4 text-sm bg-white'>
                <h5 className='pb-5 text-base font-semibold'>
                  {' '}
                  {destination.title}{' '}
                </h5>
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
                <div className='flex items-center justify-center'>
                  <Button className='px-9 text-[#B3510A]' variant={'ghost'}>
                    Read More <BsArrowRight className='ml-2' />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
