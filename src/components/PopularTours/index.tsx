import { AiOutlineClockCircle, AiFillStar } from 'react-icons/ai';
import { Button } from '../ui/button';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function PopularTours() {
  const { data } = useGetTripsQuery();

  return (
    <div className='p-20 md:py-16 py-8 bg-[#F0FBFA]'>
      <h2 className='pb-12 text-2xl font-semibold text-center'>
        Popular <span className='text-green-500'>Tour Packages</span>
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-11'>
        {data?.data?.slice(0, 3).map((destination, i) => {
          return (
            <div
              key={`${destination.name}${i}`}
              className='w-96 shadow-[0_3px_10px_rgb(0,0,0,0.4)]'
            >
              <div>
                <img src='/about.png' />
              </div>
              <div className='px-4 pt-2 pb-4 text-sm bg-white'>
                <h5 className='text-base font-semibold'>
                  {' '}
                  {destination.name}{' '}
                </h5>
                <p className='flex items-center py-4 text-xs'>
                  {' '}
                  <AiOutlineClockCircle className='text-base' />{' '}
                  <span> Duration: {destination.summary?.duration}</span>{' '}
                </p>
                <div className='flex flex-row'>
                  <div className='pb-5'>
                    <h6 className='font-medium pb-1.5'>Starting From</h6>
                    <h5>
                      <span className='text-[#B3510A] font-semibold'>
                        US ${destination.price}
                      </span>{' '}
                      <span className='line-through decoration-slate-400'>
                        US ${destination.offerPrice}{' '}
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
                    <p>
                      Based on {destination.customerReview?.length} Reviews{' '}
                    </p>
                  </div>
                </div>
                <Button className='px-9 bg-[#B3510A]'>View Details</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
