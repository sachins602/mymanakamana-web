import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetIndividualTripQuery } from '@/hooks/adminTrip.hook';
import { AiFillCalendar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
function TrekDetail() {
  const { state } = useLocation();
  const { data } = useGetIndividualTripQuery({ id: state.id });
  return (
    <div className='w-full'>
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
      <div className='flex flex-row h-80'>
        <div className='flex flex-col w-40'>
          <AiFillCalendar /> <h4>Duration</h4>
          <h4>{data?.data?.summary?.duration}</h4>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col w-60'>
          <AiFillCalendar /> <h4>Activities</h4>
          <ScrollArea className='ml-6 list-disc text-sm [&>li]:mt-2'>
            {data?.data?.tripHighlight?.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ScrollArea>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col w-40'>
          <AiFillCalendar /> <h4>Meals</h4>
          <h4>{data?.data?.summary?.duration}</h4>
        </div>
        <Separator orientation='vertical' />
      </div>

      <Button>Book Now</Button>

      {/* tabs with different info */}
      <Tabs defaultValue='overview' className='w-full'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='itinerary'>Itinerary</TabsTrigger>
          <TabsTrigger value='cost'>Cost Info</TabsTrigger>
          <TabsTrigger value='map'>Map</TabsTrigger>
        </TabsList>
        <TabsContent value='overview'>
          <h3>{data?.data?.name}</h3>
          <h6>{data?.data?.description}</h6>
          <h4>Short Itinerary</h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            {data?.data?.itinerary?.details?.map(itinerary => (
              <li key={itinerary['head']}>
                {itinerary['head']}: {itinerary['routeItinerary']}
              </li>
            ))}
          </ul>
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
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            {data?.data?.inclusion?.map(cost => <li key={cost}>{cost}</li>)}
          </ul>
          <h4>Cost Excluded</h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
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
    </div>
  );
}

export default TrekDetail;
