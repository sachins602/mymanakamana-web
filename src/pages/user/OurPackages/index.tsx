import PackageCard from '@/components/PackagesCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function OurPackages() {
  const { data } = useGetTripsQuery();
  return (
    <div>
      <img src='/activitiesbg.png' />

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {data?.data
          ?.filter(data => (data.category === 'package' ? data : null))
          .map(item => <PackageCard props={item} />)}
      </div>
    </div>
  );
}
