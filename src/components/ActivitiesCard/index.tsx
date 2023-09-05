import { AiFillStar } from 'react-icons/ai';
import { Button } from '../ui/button';
import { TripData } from '@/@types/user';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';
export type ActivitesCardProps = {
  title: string;
  Duration: string;
  original_price_US: number;
  discounted_price_US: number;
  review_count: number;
  avg_star_count: number;
};
export default function ActivitiesCard({ props }: { props: TripData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={props._id}
      className='w-80 h-[410px] hover:shadow-lg cursor-pointer'
    >
      <CardHeader>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CtaDk3U49ukzwQTk5h6n1mwtWT9HULw-piOF2eF4&s'
          // src={`${import.meta.env.VITE_BACKEND_URL}media/file/` + props.tripImage}
          alt={props.name}
          className='object-cover w-full h-52'
        />
      </CardHeader>
      <CardContent className='space-y-8'>
        <h5 className='text-center line-clamp-1'> {props.name}</h5>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <h6>Strating From: </h6>{' '}
            <h6 className='text-[#B3510A]'> {props.price}</h6>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row text-yellow-300'>
              {props.rating &&
                [...Array(Math.floor(props.rating))].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              {props.rating && props.rating % 1 !== 0 ? (
                <FaStarHalfAlt />
              ) : null}
            </div>
            <p className='text-slate-600'>
              Based on {props.customerReview?.length} reviews
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-center mt-2'>
        <Button
          onClick={() => {
            navigate('/book', {
              state: {
                bookId: props._id,
                packageName: props.name,
                days: props.summary?.duration,
                price: props.price,
                offerPrice: props.offerPrice,
              },
            });
          }}
          className='bg-green-700'
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
