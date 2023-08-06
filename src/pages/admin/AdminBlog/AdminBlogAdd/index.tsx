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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAddBlogMutation } from '@/hooks/adminBlog.hook';
import { useAddImageMutation } from '@/hooks/image.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
  const { mutate: addBlogPhoto, isSuccess: blogSuccess } =
    useAddImageMutation();
  const { mutate: addAuthorPhoto, isSuccess: authorSuccess } =
    useAddImageMutation();
  const addBlog = useAddBlogMutation();
  const [blogImageNameRes, setBlogImageNameRes] = useState<string>();
  const [authorImageNameRes, setAuthorImageNameRes] = useState<string>();
  const [formValues, setFormValues] = useState<z.infer<typeof formSchema>>();
  const navigate = useNavigate();

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
    const blogImageFormData = new FormData();
    const authorImageFormData = new FormData();
    blogImageFormData.append('image', values.image);
    blogImageFormData.append('name', values.image.name);
    authorImageFormData.append('image', values.author?.image);
    authorImageFormData.append('name', values.author?.image.name);
    addBlogPhoto(blogImageFormData, {
      onSuccess: res => {
        setBlogImageNameRes(res.path);
      },
    });
    addAuthorPhoto(authorImageFormData, {
      onSuccess: res => {
        setAuthorImageNameRes(res.path);
      },
    });
    setFormValues(values);
  }

  useEffect(() => {
    if (
      blogSuccess &&
      authorSuccess &&
      blogImageNameRes &&
      authorImageNameRes &&
      formValues
    ) {
      addBlog.mutate(
        {
          name: formValues.name,
          image: blogImageNameRes,
          description: formValues.description,
          category: formValues.category,
          trip: formValues.trip,
          _id: '',
          author: {
            id: '',
            name: formValues.author?.name,
            image: authorImageNameRes,
            profession: formValues.author?.profession,
          },
        },
        {
          onSuccess: () => {
            form.reset();
            setAuthorImageNameRes(undefined);
            setBlogImageNameRes(undefined);

            navigate('/admin/blog/view');
          },
          onError: err => {
            console.log(err, 'error');
          },
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogSuccess, authorSuccess]);

  return (
    <div>
      <h1>Add Blogs</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Choose Category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Blogs'>Blogs</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>You can choose province</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
