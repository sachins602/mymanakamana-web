import CategoryCard from '@/components/CategoryCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function Trekking() {
  const { data } = useGetTripsQuery();
  console.log(data?.data);
  return (
    <div className='w-full'>
      <img className='w-full h-[450px]' src='/activitiesbg.png' />
      <div className='grid grid-cols-1 gap-4 my-16 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {data?.data
          ?.filter(data => (data.category === 'Trekking' ? data : null))
          .map(item => <CategoryCard props={item} />)}
      </div>
    </div>
  );
}
