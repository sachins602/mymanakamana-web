import { AiFillStar } from 'react-icons/ai';
import { Button } from '../ui/button';
export type ActivitesCardProps = {
  title: string;
  Duration: string;
  original_price_US: number;
  discounted_price_US: number;
  review_count: number;
  avg_star_count: number;
};
export function ActivitiesCard({ props }: { props: ActivitesCardProps[] }) {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-11'>
      {props.map(destination => {
        return (
          <div
            key={`activity-${destination.title}`}
            className=' shadow-[0_3px_10px_rgb(0,0,0,0.4)]'
          >
            <div className='relative'>
              <img src='/bungee.png' />
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
                <Button className='bg-green-500 hover:bg-green-700'>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
