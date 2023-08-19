import PackageCard from '@/components/PackagesCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function OurPackages() {
  const { data } = useGetTripsQuery();
  return (
    <div className='w-full'>
      <img className='w-full h-[450px]' src='/activitiesbg.png' />
      <div className='grid grid-cols-1 gap-4 my-16 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {data?.data?.map(item => <PackageCard props={item} />)}
      </div>
    </div>
  );
}
