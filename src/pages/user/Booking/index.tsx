import { useAuth } from '@/contexts/AuthContext';
import { useUserBookingsQuery } from '@/hooks/booking.hook';

export function Booking() {
  const { user } = useAuth();
  console.log(user?.id);

  const { data } = useUserBookingsQuery({
    id: user?.id as string,
  });
  console.log(data?.data);
  return (
    <div>
      <h2>Booking</h2>
      <div className='grid grid-cols-3 gap-8 p-10'>
        {data?.data?.map(booking => (
          <div className='p-5 border rounded-md shadow-lg' key={booking._id}>
            <h5>{booking.packageName}</h5>
            <h5>{booking.name}</h5>
            <h5>{booking.email}</h5>
            <h5>
              Price: {booking.price?.replace(/\d+/g, '')}
              {Number(booking.totalTraveller) *
                Number(booking.price?.match(/\d+/))}
            </h5>
            <h5>
              Booking Status:{' '}
              {booking.status === 0
                ? 'Pending'
                : booking.status === 1
                ? 'Confirmed'
                : 'Cancelled'}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
