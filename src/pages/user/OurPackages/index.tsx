import PackageCard from '@/components/PackagesCard';
import { useGetTripsQuery } from '@/hooks/adminTrip.hook';

export function OurPackages() {
  const { data } = useGetTripsQuery();
  return (
    <div className='mb-8 place-items-center mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
      {data?.data?.map(item => <PackageCard props={item} />)}
    </div>
  );
}
