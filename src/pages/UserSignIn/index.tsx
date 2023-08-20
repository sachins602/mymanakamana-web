import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useUserLoginMutation } from '@/hooks/user.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(100),
});

export function UserSignIn() {
  const register = useUserLoginMutation();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    register.mutate(values, {
      onSuccess: res => {
        signIn(res);
        toast({
          variant: 'success',
          title: res.success ? 'Login Success' : 'Login Failed',
          description: 'Your trip has been booked successfully',
        });
        form.reset();
        navigate('/');
      },
      onError: () => {
        form.reset();
        toast({
          variant: 'destructive',
          title: 'Error',
          description:
            'Something went wrong While booking your trip. Please try again!',
        });
      },
    });
  }
  return (
    <div className='w-full h-screen bg-[url("/packagesbg.png")] bg-cover bg-center bg-no-repeat'>
      <div className='w-96 bg-[#F1F6E9] mx-auto mt-48 p-10 space-y-4'>
        <img src='/loginimage.png' alt='logo' className='mx-auto ' />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='rounded-2xl'
                      placeholder='Enter Your Email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='rounded-2xl'
                      placeholder='Enter Your Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <a className='flex justify-end' href='/register'>
              <p className='text-left text-blue-300 hover:underline hover:text-blue-600 '>
                Forgot Password ?
              </p>
            </a>
            <Button className='bg-[#80AC5D] w-full' type='submit'>
              Login
            </Button>
          </form>
        </Form>
        <Button
          onClick={() => navigate('/register')}
          className='bg-[#B3510A] w-full'
          type='button'
        >
          Register
        </Button>
      </div>
    </div>
  );
}
