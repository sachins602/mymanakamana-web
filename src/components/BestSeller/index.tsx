import { AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '../ui/button';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';
export function BestSeller() {
  const { data } = useGetTripsQuery();

  return (
    <div className='bg-[#F0FBFA] w-full py-16'>
      <h2 className='pb-12 text-2xl font-semibold text-center'>
        Our Best Selling Packages
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-16 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {data?.data?.slice(0, 6).map((destination, i) => {
          return (
            <div
              key={`best-seller-${destination._id}${i}`}
              className='w-80 shadow-[0_3px_10px_rgb(0,0,0,0.4)]'
            >
              <div className='relative'>
                <img src='/packagesbg.png' />
                <span className='absolute px-4 py-2 font-semibold text-white bg-green-400 top-5'>
                  {' '}
                  {destination.summary?.duration}{' '}
                </span>
              </div>
              <div className='px-4 pt-2 pb-4 text-sm bg-white'>
                <h5 className='pb-5 text-base font-semibold'>
                  {' '}
                  {destination.name}{' '}
                </h5>
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
                <div className='flex items-center justify-center'>
                  <Button className='px-9 text-[#B3510A]' variant={'ghost'}>
                    Book <BsArrowRight className='ml-2' />
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
