import { useAuth } from '@/contexts/AuthContext';
import { useUserBookingsQuery } from '@/hooks/booking.hook';

export function Booking() {
  const { user } = useAuth();

  const { data } = useUserBookingsQuery({
    id: user?.id as string,
  });
  return (
    <div>
      <h2>Booking</h2>
      <div className='grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-3'>
        {data?.data && data?.data?.length === 0 && (
          <h6>You haven't made any bookings yet!!!!</h6>
        )}
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
            <div className='flex flex-row'>
              <h5> Booking Status: </h5>

              {booking.status === 0 ? (
                <div className='flex flex-row'>
                  <svg
                    viewBox='0 0 1024 1024'
                    className='text-yellow-400 w-7 h-7'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M511.9 183c-181.8 0-329.1 147.4-329.1 329.1s147.4 329.1 329.1 329.1c181.8 0 329.1-147.4 329.1-329.1S693.6 183 511.9 183z m0 585.2c-141.2 0-256-114.8-256-256s114.8-256 256-256 256 114.8 256 256-114.9 256-256 256z'
                      fill='currentColor'
                    />
                    <path
                      d='M548.6 365.7h-73.2v161.4l120.5 120.5 51.7-51.7-99-99z'
                      fill='currentColor'
                    />
                  </svg>
                  <h5>Pending</h5>
                </div>
              ) : booking.status === 1 ? (
                <div className='flex flex-row'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-green-400 w-7 h-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <h5>Success</h5>
                </div>
              ) : (
                <div className='flex flex-row'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-red-500 w-7 h-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <h5>Cancelled</h5>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
