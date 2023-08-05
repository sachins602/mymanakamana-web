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
import { Data } from '@/@types/user';
import { Switch } from '@/components/ui/switch';

const formSchema = z.object({
  name: z.string().min(3).max(100),
  slogan: z.string().optional(),
  status: z.boolean().optional(),
});

function AdminEditCategoryForm({ props }: { props: Data }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.name,
      slogan: props.slogan,
      status: props.status,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder='name' {...field} />
              </FormControl>
              <FormDescription>Enter your Category name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='slogan'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slogan</FormLabel>
              <FormControl>
                <Input placeholder='slogan' {...field} />
              </FormControl>
              <FormDescription>Enter your slogan.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>Enter your status.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

export default AdminEditCategoryForm;
