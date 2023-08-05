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
import { useAddTrekkingMutation } from '@/hooks/adminTrekking.hook';
import { useAddImageMutation } from '@/hooks/image.hook';
import { zodResolver } from '@hookform/resolvers/zod';
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

//  category: { type: String },
//     name: { type: String },
//     bannerImage: { type: String },
//     tripImage: { type: String },
//     mapImage: { type: String },
//     video: { type: String },
//     imageGallery: [],
//     price: { type: String },
//     isSpecialOffer: { type: Boolean, default: false },
//     isSpanish: { type: Boolean, default: false },
//     offerPrice: String,
//     pax2Price: String,
//     pax5price: String,
//     pax10price: String,
//     pax15price: String,
//     pax16price: String,
//     summary: {
//         duration: String,
//         destination: String,
//         startPoint: String,
//         endPoint: String,
//         groupSize: String,
//         maxaltitude: String,
//         bestSeason: String,
//         difficulty: String,
//         meals: String,
//         accomodation: String,
//         activities: String,
//     },
//     tripHighlight: { type: [] },
//     description: { type: String },
//     itinerary: {
//         description: { type: String },

//         details: [
//             {
//                 head: { type: String , default:null },
//                 headDetails: { type: String , default:null },
//                 mode: { type: String , default:null },
//                 routeItinerary: { type: String , default:null },
//                 elevation: { type: String , default:null },
//                 duration: { type: String , default:null },
//                 overnight: { type: String , default:null },
//                 included: { type: String , default:null },
//                 activity: { type: String , default:null },
//                 activityDuration: { type: String , default:null },
//                 accomodation: { type: String , default:null },
//             }
//         ]
//     },
//     inclusion: { type: [] },
//     optionalInclusion: { type: [] },
//     exclusion: { type: [] },
//     aboutTrip: [
//         {
//             head: { type: String },
//             headDetails: { type: String },
//         }
//     ],
//     faq: [
//         {
//             head: { type: String },
//             headDetails: { type: String },
//         }
//     ],
//     customerReview: [
//         {
//             userid: String,
//             user: String,
//             rating: String,
//             comment: String,
//             postedOn: { type: Date, default: Date.now() },
//         }
//     ],
//     totalViews: { type: Number, default: 500 },
//     rating: { type: Number, default: 4.5 },
//     status: { type: Boolean, default: true },
//     createdby: String,
//     updatedby: String,
//     createdon: { type: Date, default: Date.now() },
//     updatedon: { type: Date, default: Date.now() }

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

export function AdminAddTrekking() {
  const addTrekking = useAddTrekkingMutation();
  const addPhoto = useAddImageMutation();
  const navigate = useNavigate();

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
        addTrekking.mutate(
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
              form.reset();
              navigate('/admin/trekking/view');
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
  }
  return (
    <div>
      <h1>Add Trekking</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trekking Name</FormLabel>
                <FormControl>
                  <Input placeholder='name' {...field} />
                </FormControl>
                <FormDescription>Enter your Trekking name.</FormDescription>
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
    </div>
  );
}
