import TrekkingCard from '@/components/TrekkingCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function Trekking() {
  const { data } = useGetTripsQuery();
  return (
    <div className='w-full p-8'>
      <h1>Trekking</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {data?.data
          ?.filter(data => (data.category === 'Trekking' ? data : null))
          .map(item => <TrekkingCard props={item} />)}
      </div>
    </div>
  );
}
