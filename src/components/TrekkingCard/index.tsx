import { TripData } from '@/@types/user';

import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import { useNavigate } from 'react-router-dom';

function TrekkingCard({ props }: { props: TripData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={props._id}
      className='w-80 h-96'
      onClick={() => {
        navigate('/trekDetail', {
          state: {
            id: props._id,
          },
        });
      }}
    >
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription className='h-16 overflow-hidden text-ellipsis'>
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={'http://localhost:4000/api/media/file/' + props.tripImage}
          alt={props.name}
          className='object-cover w-full h-32'
        />
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button>Book</Button>
      </CardFooter>
    </Card>
  );
}

export default TrekkingCard;
