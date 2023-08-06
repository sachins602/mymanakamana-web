import { TripData } from '@/@types/user';

import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';

function TrekkingCard({ props }: { props: TripData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={props._id}
      className='w-80 h-[410px]'
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
          className='object-cover w-full h-56'
        />
      </CardHeader>
      <CardContent>
        <h5 className='line-clamp-1'> {props.name}</h5>
        <div className='flex flex-row justify-between'>
          <h6>{props.summary?.duration}</h6>
          <h6>{props.summary?.maxaltitude}</h6>
        </div>
        <div className='flex flex-row justify-between'>
          <h6>Strating From: {props.price}</h6>
          <h6>{props.rating}</h6>
        </div>
      </CardContent>
      <CardFooter className='flex'>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}

export default TrekkingCard;
