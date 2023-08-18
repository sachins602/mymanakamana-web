import { TripData } from '@/@types/user';
import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';
import { FaStarHalfAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

function CategoryCard({ props }: { props: TripData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={props._id}
      className='w-80 h-[410px] hover:shadow-lg cursor-pointer'
      onClick={() => {
        navigate('/trekDetail', {
          state: {
            id: props._id,
          },
        });
      }}
    >
      <CardHeader>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CtaDk3U49ukzwQTk5h6n1mwtWT9HULw-piOF2eF4&s'
          // src={'http://localhost:4000/api/media/file/' + props.tripImage}
          alt={props.name}
          className='object-cover w-full h-52'
        />
      </CardHeader>
      <CardContent className='space-y-8'>
        <h5 className='line-clamp-1 text-center'> {props.name}</h5>
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
      <CardFooter className='flex mt-2 justify-center'>
        <Button className='bg-green-700'>Book Now</Button>
      </CardFooter>
    </Card>
  );
}

export default CategoryCard;
