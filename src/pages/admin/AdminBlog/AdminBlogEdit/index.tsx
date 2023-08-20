import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { EditBlogData } from '@/@types/user';
import { useAddBlogMutation } from '@/hooks/adminBlog.hook';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
});

function AdminBlogEdit({ props }: { props: EditBlogData }) {
  const editBlog = useAddBlogMutation();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.name,
      description: props.description,
      category: props.category,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    editBlog.mutate(
      {
        _id: props._id,
        name: values.name,
        description: values.description,
        category: values.category,
      },
      {
        onSuccess: res => {
          console.log(res);
          toast({
            variant: 'success',
            title: res.api_status,
            description: 'Your trip has been booked successfully',
          });
          form.reset();
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
      },
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Choose Category' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Blog'>Blog</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>You can choose your Category</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder='description' {...field} />
              </FormControl>
              <FormDescription>Enter your Description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder='category' {...field} />
              </FormControl>
              <FormDescription>Enter your category.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

export default AdminBlogEdit;
