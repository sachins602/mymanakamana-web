import { useGetIndividualTripQuery } from '@/hooks/adminTrip.hook';
import { useLocation } from 'react-router-dom';
function TrekDetail() {
  const { state } = useLocation();
  const { data } = useGetIndividualTripQuery({ id: state.id });
  return (
    <div>
      <h1>TrekDetail</h1>
      <h1>{data?.data?.name}</h1>
      <h1>{data?.data?.description}</h1>
      <h1>{data?.data?.category}</h1>
      <h1>{data?.data?.tripImage}</h1>
      <h1>{data?.data?.price}</h1>
    </div>
  );
}

export default TrekDetail;
