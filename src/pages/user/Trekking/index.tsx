import CategoryCard from '@/components/CategoryCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function Trekking() {
  const { data } = useGetTripsQuery();
  return (
    <div className='w-full p-8'>
      <img className='w-full h-[450px]' src='/activitiesbg.png' />
      <div className='place-items-center mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data?.data
          ?.filter(data => (data.category === 'Trekking' ? data : null))
          .map(item => <CategoryCard props={item} />)}
      </div>
    </div>
  );
}
