import { BestSeller } from '@/components/BestSeller';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetIndividualTripQuery } from '@/hooks/adminTrip.hook';
import { AiFillCalendar } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

function TrekDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data } = useGetIndividualTripQuery({ id: state.tripId });
  console.log(data?.data);
  return (
    <div className='w-full space-y-8 text-center'>
      {/* <img
        src={'http://localhost:4000/api/media/file/' + data?.data?.tripImage}
        alt={data?.data?.name}
      /> */}
      <img
        className='object-cover w-full h-96'
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
        alt={data?.data?.name}
      />
      <h1>{data?.data?.name}</h1>
      {/* details crd */}
      <div className='flex flex-row w-fit mx-auto h-72 bg-[#E0F2F1] gap-4'>
        <div className='flex flex-col items-center w-40'>
          <div className='flex flex-row items-center'>
            <AiFillCalendar /> <h4>Duration</h4>
          </div>
          <h6>{data?.data?.summary?.duration}</h6>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col items-center w-60'>
          <div className='flex flex-row items-center'>
            <AiFillCalendar /> <h4>Activities</h4>
          </div>
          <ScrollArea className='ml-6 list-disc text-sm [&>li]:mt-2 text-left'>
            {data?.data?.tripHighlight?.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ScrollArea>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col items-center w-40'>
          <div className='flex flex-row items-center'>
            <AiFillCalendar /> <h4>Accomodation</h4>
          </div>
          <h6>{data?.data?.summary?.accomodation}</h6>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col items-center w-40'>
          <div className='flex flex-row items-center'>
            <AiFillCalendar /> <h4>Meals</h4>
          </div>
          <h6>{data?.data?.summary?.meals}</h6>
        </div>
      </div>

      <Button
        type='button'
        className='bg-[#B3510A]'
        onClick={() =>
          navigate('/book', {
            state: {
              bookId: data?.data?._id,
              packageName: data?.data?.name,
              days: data?.data?.summary?.duration,
              price: data?.data?.price,
              offerPrice: data?.data?.offerPrice,
            },
          })
        }
      >
        Book Now
      </Button>

      {/* tabs with different info */}
      <Tabs defaultValue='overview' className='w-[80%] mx-auto'>
        <TabsList className='w-full justify-evenly'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='itinerary'>Itinerary</TabsTrigger>
          <TabsTrigger value='cost'>Cost Info</TabsTrigger>
          <TabsTrigger value='map'>Map</TabsTrigger>
        </TabsList>
        <TabsContent value='overview'>
          <h3>{data?.data?.name}</h3>
          <h6>{data?.data?.description}</h6>
          <h4>Short Itinerary</h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2 text-left'>
            {data?.data?.itinerary?.details?.map(itinerary => (
              <li key={itinerary['head']}>
                {itinerary['head']}: {itinerary['routeItinerary']}
              </li>
            ))}
          </ul>
          <h4>Note: We can modify itinerary according to your needs</h4>
        </TabsContent>
        <TabsContent value='itinerary'>
          <ul className='my-6 ml-6 [&>li]:mt-2'>
            {data?.data?.itinerary?.details?.map(itinerary => (
              <li key={itinerary['head']}>
                <h4>
                  {itinerary['head']}: {itinerary['routeItinerary']}
                </h4>
                <h6>{itinerary['headDetails']}</h6>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value='cost'>
          <h4>Cost Included</h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2 text-left'>
            {data?.data?.inclusion?.map(cost => <li key={cost}>{cost}</li>)}
          </ul>
          <h4>Cost Excluded</h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2 text-left'>
            {data?.data?.exclusion?.map(cost => <li key={cost}>{cost}</li>)}
          </ul>
        </TabsContent>
        <TabsContent value='map'>
          <img
            className='object-cover w-full h-96'
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
            alt={data?.data?.name}
          />
          {/* <img
            className='object-cover w-full h-96'
            src={'http://localhost:4000/api/media/file/' + data?.data?.mapImage}
            alt={data?.data?.name}
          /> */}
        </TabsContent>
      </Tabs>

      <BestSeller />
    </div>
  );
}

export default TrekDetail;
