import { useAllBookingsQuery } from '@/hooks/booking.hook';

export function AdminBooking() {
  const { data } = useAllBookingsQuery();
  return (
    <div>
      <h3>Bookings</h3>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {data?.data?.map((item, i) => {
          return (
            <div key={`${item._id}${i}`} className='w-full bg-slate-400'>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                  <p className='text-sm'>{item.email}</p>
                  <p className='text-sm'>{item.address}</p>
                </div>
                <div>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                  <p className='text-sm'>{item.price}</p>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-xl font-semibold'>Total Travellers</h3>
                  <p className='text-sm'>{item.totalTraveller}</p>
                </div>
                <div>
                  <h3 className='text-xl font-semibold'>Booking Status</h3>
                  <p className='text-sm'>{item.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
