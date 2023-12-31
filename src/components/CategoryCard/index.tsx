import { TripData } from '@/@types/user';
import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';
import { FaStarHalfAlt } from 'react-icons/fa';
import { AiFillStar, AiOutlineFieldTime } from 'react-icons/ai';
import { FaMountain } from 'react-icons/fa';

function CategoryCard({ props }: { props: TripData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={`${props._id} + ${props.rating}`}
      className='w-80 h-[410px] hover:shadow-lg cursor-pointer'
    >
      <CardHeader>
        <img
          src={
            `${import.meta.env.VITE_BACKEND_URL}media/file/` + props.tripImage
          }
          alt={props.name}
          className='object-cover w-full h-52'
        />
      </CardHeader>
      <CardContent className='space-y-4'>
        <h5 className='text-center line-clamp-1'> {props.name}</h5>
        <div className='flex flex-row justify-between text-center'>
          <div className='flex flex-row items-center gap-2 text-slate-500'>
            <AiOutlineFieldTime />
            <p>Duration: {props.summary?.duration}</p>
          </div>
          <div className='flex flex-row items-center gap-2 text-slate-500'>
            <FaMountain /> <p> {props.summary?.maxaltitude}</p>
          </div>
        </div>
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
            navigate('/trekDetail', {
              state: {
                tripId: props._id,
              },
            });
          }}
          className='bg-green-700'
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CategoryCard;
