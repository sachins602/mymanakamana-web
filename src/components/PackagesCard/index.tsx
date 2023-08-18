import { TripData } from '@/@types/user';

import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';
import { BiTimer } from 'react-icons/bi';
import { FaMountain, FaStarHalfAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

function PackageCard({ props }: { props: TripData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={props._id}
      className='w-80 h-[410px] hover:shadow-lg cursor-pointer'
      onClick={() => {
        navigate('/book', {
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
          className='object-cover w-full h-56'
        />
      </CardHeader>
      <CardContent className='space-y-4'>
        <h5 className='line-clamp-1'> {props.name}</h5>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <BiTimer />
            <h6>{props.summary?.duration}</h6>
          </div>
          <div className='flex flex-row'>
            <FaMountain />
            <h6>{props.summary?.maxaltitude}</h6>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <h6>Strating From: {props.price}</h6>
          <div className='flex flex-row'>
            <AiFillStar />
            <FaStarHalfAlt />
            <h6>{props.rating}</h6>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex mt-2'>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
  );
}

export default PackageCard;
