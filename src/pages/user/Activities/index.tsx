import { ActivitiesCard } from '@/components/ActivitiesCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function Activities() {
  const { data } = useGetTripsQuery();
  return (
    <div>
      <img src='/activitiesbg.png' />

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {data?.data
          ?.filter(data => (data.category === 'Activity' ? data : null))
          .map(item => <ActivitiesCard props={item} />)}
      </div>
    </div>
  );
}
