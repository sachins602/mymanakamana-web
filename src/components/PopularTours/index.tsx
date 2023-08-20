import { AiOutlineClockCircle, AiFillStar } from 'react-icons/ai';
import { Button } from '../ui/button';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';
import { useNavigate } from 'react-router-dom';

export function PopularTours() {
  const { data } = useGetTripsQuery();
  const navigate = useNavigate();

  return (
    <div className='p-20 md:py-16 py-8 bg-[#F0FBFA]'>
      <h2 className='pb-12 text-2xl font-semibold text-center'>
        Popular <span className='text-green-500'>Tour Packages</span>
      </h2>
      <div className='grid justify-center gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {data?.data?.slice(0, 3).map((destination, i) => {
          return (
            <div
              key={`${destination.name}${i}`}
              className='w-80 shadow-[0_3px_10px_rgb(0,0,0,0.4)]'
            >
              <div>
                <img src='/about.png' />
              </div>
              <div className='px-3 pt-1 pb-2 text-sm bg-white'>
                <h5 className='text-base font-semibold'>
                  d{destination.name}{' '}
                </h5>
                <p className='flex items-center py-2 text-xs'>
                  <AiOutlineClockCircle className='text-base' />{' '}
                  <span> Duration: {destination.summary?.duration}</span>{' '}
                </p>
                <div className='flex flex-row'>
                  <div className='pb-2'>
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
                    <div className='flex pb-1 text-lg text-yellow-500'>
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
                <Button
                  type='button'
                  onClick={() =>
                    navigate('/book', {
                      state: {
                        bookId: destination._id,
                        packageName: destination.name,
                        days: destination.summary?.duration,
                        price: destination.price,
                        offerPrice: destination.offerPrice,
                      },
                    })
                  }
                  className='pl-9 bg-[#B3510A]'
                >
                  Book
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
