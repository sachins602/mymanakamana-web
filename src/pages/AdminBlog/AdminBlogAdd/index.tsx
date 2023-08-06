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
import { Switch } from '@/components/ui/switch';
import { useAddBlogMutation } from '@/hooks/adminBlog.hook';
import { useAddImageMutation } from '@/hooks/image.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const MAX_FILE_SIZE = 2000000;
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
  description: z.string().optional(),
  category: z.string().optional(),
  isGuidline: z.boolean().optional(),
  trip: z.string().optional(),
  author: z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      image: z
        .any()
        .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
          file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          'Only .jpg, .jpeg, .png and .webp formats are supported.',
        ),
      profession: z.string().optional(),
    })
    .optional(),
});

export function AdminBlogAdd() {
  const addPhoto = useAddImageMutation();
  const addBlog = useAddBlogMutation();
  const queryClient = useQueryClient();
  const [imageNames, setImageNames] = useState<{
    blogImageName?: string;
    authorImageName?: string;
  }>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const blogImageFormaData = new FormData();
    const authorImageFormaData = new FormData();
    blogImageFormaData.append('image', values.image);
    blogImageFormaData.append('name', values.image.name);
    authorImageFormaData.append('image', values.author?.image);
    authorImageFormaData.append('name', values.author?.image.name);
    Promise.all([
      addPhoto.mutateAsync(blogImageFormaData, {
        onSuccess: res => {
          queryClient.invalidateQueries({
            queryKey: ['postImage'],
          });
          setImageNames(prev => ({
            ...prev,
            authorImageName: res.path,
          }));
        },
        onError: err => {
          console.log(err, 'error');
        },
      }),
      addPhoto.mutateAsync(authorImageFormaData, {
        onSuccess: res => {
          queryClient.invalidateQueries({
            queryKey: ['postImage'],
          });
          setImageNames(prev => ({
            ...prev,
            authorImageName: res.path,
          }));
        },
        onError: err => {
          console.log(err, 'error');
        },
      }),
    ]).then(res => {
      if (res[0].status === 'fulfilled' || res[1].status === 'fulfilled') {
        console.log(imageNames, 'imageNames');
        addBlog.mutate(
          {
            name: values.name,
            image: imageNames?.blogImageName,
            description: values.description,
            category: values.category,
            isGuidline: values.isGuidline,
            trip: values.trip,
            _id: '',
            author: {
              id: '',
              name: values.author?.name,
              image: imageNames?.authorImageName,
              profession: values.author?.profession,
            },
          },
          {
            onSuccess: res => {
              console.log(res, 'success');
              form.reset();
            },
            onError: err => {
              console.log(err, 'error');
            },
          },
        );
      }
    });
  }
  return (
    <div>
      <h1>Add Blogs</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Name</FormLabel>
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
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder='description' {...field} />
                </FormControl>
                <FormDescription>Enter your description.</FormDescription>
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
          <FormField
            control={form.control}
            name='isGuidline'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is Guidline</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>Enter your isGuidline.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='trip'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trip</FormLabel>
                <FormControl>
                  <Input placeholder='trip' {...field} />
                </FormControl>
                <FormDescription>Enter your trip.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author.name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Name</FormLabel>
                <FormControl>
                  <Input placeholder='author name' {...field} />
                </FormControl>
                <FormDescription>Enter your author name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author.image'
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
            name='author.profession'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Profession</FormLabel>
                <FormControl>
                  <Input placeholder='author profession' {...field} />
                </FormControl>
                <FormDescription>Enter your author profession.</FormDescription>
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
