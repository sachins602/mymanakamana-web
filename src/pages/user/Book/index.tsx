import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useAddBookingMutation } from '@/hooks/booking.hook';
import { cn } from '@/utils/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { BiTimer } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { z } from 'zod';

const FormSchema = z.object({
  date: z.date({
    required_error: 'Start date is required',
  }),
  package: z.string({
    required_error: 'Tour is required',
  }),
  name: z.string({
    required_error: 'First name is required',
  }),
  email: z.string({
    required_error: 'Email is required',
  }),
  contactNumber: z.string().optional(),
  totalTraveller: z.string({
    required_error: 'Total traveller is required',
  }),
});

function Book() {
  const { state } = useLocation();

  const { user } = useAuth();

  const bookTrip = useAddBookingMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      package: state.packageName,
      date: new Date(),
      totalTraveller: '1',
      contactNumber: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    bookTrip.mutate(
      {
        _id: '',
        packageId: state.bookId,
        packageName: data.package,
        userId: user?.id as string,
        date: data.date,
        name: data.name,
        email: data.email,
        price:
          state.offerPrice === undefined || state.offerPrice === ''
            ? state.price
            : state.offerPrice,
        totalTraveller: String(data.totalTraveller),
        contactNumber: data.contactNumber,
      },
      {
        onSuccess: res => {
          console.log(res);
        },
        onError: err => {
          console.log(err);
        },
      },
    );
  }
  return (
    <div className='items-center w-full space-y-8 text-center'>
      <img className='w-full h-[450px]' src='/activitiesbg.png' />
      <h2>Book Your Trip</h2>
      <div className='grid grid-cols-2 pb-20'>
        <div className='space-y-8'>
          <h3>Enter Your Trip Details</h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid grid-cols-2 gap-8 mx-auto w-fit'
            >
              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='p-1'>Trip Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              new Date(field.value).toLocaleDateString()
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='w-4 h-4 ml-auto opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='package'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selected Tour</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder='full name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='example@email.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='contactNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input placeholder='+977 9846000000' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='totalTraveller'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total People</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit'>Book</Button>
            </form>
          </Form>
        </div>
        <div className='space-y-8'>
          <h3>Summary</h3>
          <div className='flex flex-col items-center py-4 mx-auto space-y-8 rounded-md shadow-lg w-96 h-fit bg-slate-400'>
            <h6>
              Trip Start Date: {form.getValues('date').toLocaleDateString()}
            </h6>
            <Separator className='bg-slate-500' />
            <div className='flex flex-row gap-2'>
              <h6>Total Days: </h6>
              <div className='flex flex-row items-center '>
                <div className='text-xl text-red-700'>
                  <BiTimer />
                </div>
                <h6> {state.days ? state.days : 'Flexible'}</h6>
              </div>
            </div>
            <Separator className='bg-slate-500' />
            <h6>Price: {state.price}</h6>
            <Separator className='bg-slate-500' />
            <h6>Offer Price: {state.offerPrice}</h6>
            <Separator className='bg-slate-500' />
            <p>Note: Price quoted is for single person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
