import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  useAddBookingMutation,
  useAllBookingsQuery,
} from '@/hooks/booking.hook';

export function AdminBooking() {
  const { data, refetch } = useAllBookingsQuery();
  const { toast } = useToast();
  const handleBooking = useAddBookingMutation();
  return (
    <div>
      <h3>Bookings</h3>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {data?.data?.map((item, i) => {
          return (
            <div
              key={`${item._id} + ${i}`}
              className='flex flex-col items-center gap-6 p-2 border rounded-lg shadow-lg'
            >
              <div className='flex flex-row space-x-4'>
                <div className='my-auto w-28 h-28'>
                  <img className='w-full h-full' src='/person.png' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-lg font-semibold text-gray-800'>
                    {item.packageName}
                  </p>
                  <p className='text-xs font-semibold text-gray-600'>
                    Customer Name:{' '}
                    <span className='font-normal'>{item.name}</span>
                  </p>
                  <p className='text-xs font-semibold text-gray-600'>
                    Customer Email:{' '}
                    <span className='font-normal'>{item.email}</span>
                  </p>
                  <p className='text-xs font-semibold text-gray-600'>
                    Start Date:{' '}
                    <span className='font-normal'>{item.date?.toString()}</span>
                  </p>
                  <p className='text-xs font-semibold text-gray-600'>
                    Quoted Price:{' '}
                    <span className='font-normal'>{item.price}</span>
                  </p>
                  <p className='text-xs font-semibold text-gray-600'>
                    Booking Satus:{' '}
                    <span className='font-normal'>
                      {item.status === 0
                        ? 'Pending'
                        : item.status === 1
                        ? 'confirmed'
                        : 'cancelled'}
                    </span>
                  </p>
                </div>
              </div>
              {item.status === 0 ? (
                <div className='space-x-6'>
                  <Button
                    onClick={() =>
                      handleBooking.mutate({
                        _id: item._id as string,
                        totalTraveller: item.totalTraveller as string,
                        packageId: item.packageId as string,
                        userId: item.userId as string,
                        date: item.date as Date,
                        email: item.email as string,
                        name: item.name as string,
                        packageName: item.packageName as string,
                        price: item.price as string,
                        status: 1,
                      })
                    }
                    className='bg-green-500 px-9'
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() =>
                      handleBooking.mutate(
                        {
                          _id: item._id as string,
                          totalTraveller: item.totalTraveller as string,
                          packageId: item.packageId as string,
                          userId: item.userId as string,
                          date: item.date as Date,
                          email: item.email as string,
                          name: item.name as string,
                          packageName: item.packageName as string,
                          price: item.price as string,
                          status: 2,
                        },
                        {
                          onSuccess: res => {
                            refetch();
                            toast({
                              variant: 'success',
                              title: res.api_status,
                              description:
                                'Your trip has been booked successfully',
                            });
                          },
                          onError: () => {
                              toast({
                                variant: 'destructive',
                                title: 'Error',
                                description:
                                  'Something went wrong While booking your trip. Please try again!',
                              });
                          },
                        },
                      )
                    }
                    className='bg-red-500 px-9'
                  >
                    Cancel
                  </Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
