import { BlogData } from '@/@types/user';
import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';

function BlogCard({ props }: { props: BlogData }) {
  const navigate = useNavigate();
  return (
    <Card
      key={props._id}
      className='w-80 h-[410px] hover:shadow-lg cursor-pointer'
    >
      <CardHeader>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CtaDk3U49ukzwQTk5h6n1mwtWT9HULw-piOF2eF4&s'
          // src={'http://localhost:4000/api/media/file/' + props.tripImage}
          alt={props.name}
          className='object-cover w-full h-52'
        />
      </CardHeader>
      <CardContent className='space-y-4'>
        <h5 className='line-clamp-1'> {props.name}</h5>

        <h6>{props.updatedon?.toString()}</h6>
        <div className='flex flex-col'>
          <p className='text-slate-600'>Based on {props.name} reviews</p>
        </div>
      </CardContent>
      <CardFooter className='flex justify-center mt-2'>
        <Button
          onClick={() => {
            navigate('/blogDetail', {
              state: {
                blogId: props._id,
              },
            });
          }}
          className='bg-green-700'
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
