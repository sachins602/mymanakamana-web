import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { useAddCategoryMutation } from '@/hooks/adminCategory.hook';
import { useAddImageMutation } from '@/hooks/uploadImage.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const formSchema = z.object({
  name: z.string().min(3).max(100),
  image: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    )
    .optional(),
  slogan: z.string().optional(),
  status: z.boolean().optional(),
});

export function AdminCategory() {
  const addCategory = useAddCategoryMutation();
  const addPhoto = useAddImageMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      image: '',
      slogan: '',
      status: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    formData.append('image', values.image);
    formData.append('name', values.image.name);
    addPhoto.mutate(formData, {
      onSuccess: res => {
        addCategory.mutate(
          {
            _id: '',
            name: values.name,
            image: res.path,
            createdBy: 'admin',
            slogan: values.slogan,
            status: values.status ? values.status : false,
          },
          {
            onSuccess: res => {
              console.log(res);
            },
            onError: () => {
              console.log('error');
            },
          },
        );
      },
      onError: err => {
        console.log(err, 'error');
      },
    });
    addCategory.mutate(
      {
        _id: '',
        name: values.name,
        image: values.image,
        createdBy: 'admin',
        slogan: values.slogan,
        status: values.status ? values.status : false,
      },
      {
        onSuccess: res => {
          console.log(res);
        },
        onError: () => {
          console.log('error');
        },
      },
    );
  }
  return (
    <div>
      <h1>Add Category</h1>
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
            name='image'
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Profile photo</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Profile photo'
                    type='file'
                    accept='image/*'
                    {...fieldProps}
                    onChange={event =>
                      onChange(
                        event.target.files ? event.target.files[0] : null,
                      )
                    }
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
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
                  <Checkbox
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
    </div>
  );
}
