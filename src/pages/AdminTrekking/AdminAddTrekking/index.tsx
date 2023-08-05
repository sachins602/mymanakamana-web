import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { Switch } from '@/components/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

// const MAX_FILE_SIZE = 2000000;
// const ACCEPTED_IMAGE_TYPES = [
//   'image/jpeg',
//   'image/jpg',
//   'image/png',
//   'image/webp',
// ];

export type Trip = {
  category: string;
  name: string;
  bannerImage: string;
  tripImage: string;
  mapImage: string;
  video: string;
  imageGallery: string[];
  price: string;
  isSpecialOffer: boolean;
  isSpanish?: boolean;
  offerPrice?: string;
  pax2Price?: string;
  pax5price?: string;
  pax10price?: string;
  pax15price?: string;
  pax16price?: string;
  summary: {
    duration: string;
    destination: string;
    startPoint: string;
    endPoint: string;
    groupSize: string;
    maxaltitude: string;
    bestSeason: string;
    difficulty: string;
    meals: string;
    accomodation: string;
    activities: string;
  };
  tripHighlight: string[];
  description: string;
  itinerary: {
    description: string;
    details: {
      head?: string | null;
      headDetails?: string | null;
      mode?: string | null;
      routeItinerary?: string | null;
      elevation?: string | null;
      duration?: string | null;
      overnight?: string | null;
      included?: string | null;
      activity?: string | null;
      activityDuration?: string | null;
      accomodation?: string | null;
    }[];
  };
  inclusion: string[];
  optionalInclusion: string[];
  exclusion: string[];
  aboutTrip: {
    head: string;
    headDetails: string;
  }[];
  faq: {
    head: string;
    headDetails: string;
  }[];
  customerReview: {
    userid: string;
    user: string;
    rating: string;
    comment: string;
    postedOn: Date;
  }[];
  totalViews: number;
  rating: number;
  status: boolean;
  createdby: string;
};

const formSchema = z.object({
  category: z.string(),
  name: z.string(),
  bannerImage: z.string().optional(),
  tripImage: z.string().optional(),
  mapImage: z.string().optional(),
  video: z.string().optional(),
  // imageGallery: z.array(z.string()).optional(),
  price: z.string(),
  isSpecialOffer: z.boolean().optional(),
  // isSpanish: z.boolean().optional(),
  offerPrice: z.string().optional(),
  pax2Price: z.string().optional(),
  pax5Price: z.string().optional(),
  pax10Price: z.string().optional(),
  pax15Price: z.string().optional(),
  pax16Price: z.string().optional(),
  summary: z.object({
    duration: z.string(),
    destination: z.string(),
    startPoint: z.string(),
    endPoint: z.string(),
    groupSize: z.string(),
    maxaltitude: z.string(),
    bestSeason: z.string(),
    difficulty: z.string(),
    meals: z.string(),
    accomodation: z.string(),
    activities: z.string(),
  }),
  // tripHighlight: z.array(z.string()).optional(),
  description: z.string(),
  itinerary: z.object({
    description: z.string(),
    // details: z.array(
    //   z.object({
    //     head: z.string().optional(),
    //     headDetails: z.string().optional(),
    //     mode: z.string().optional(),
    //     routeItinerary: z.string().optional(),
    //     elevation: z.string().optional(),
    //     duration: z.string().optional(),
    //     overnight: z.string().optional(),
    //     included: z.string().optional(),
    //     activity: z.string().optional(),
    //     activityDuration: z.string().optional(),
    //     accomodation: z.string().optional(),
    //   }),
    // ),
  }),
  // inclusion: z.array(z.string()).optional(),
  // optionalInclusion: z.array(z.string()).optional(),
  // exclusion: z.array(z.string()).optional(),
  // aboutTrip: z.array(
  //   z.object({
  //     head: z.string().optional(),
  //     headDetails: z.string().optional(),
  //   }),
  // ),
  // faq: z.array(
  //   z.object({
  //     head: z.string().optional(),
  //     headDetails: z.string().optional(),
  //   }),
  // ),
  // customerReview: z.array(
  //   z.object({
  //     userid: z.string().optional(),
  //     user: z.string().optional(),
  //     rating: z.string().optional(),
  //     comment: z.string().optional(),
  //     // postedOn: z.date().optional(),
  //   }),
  // ),
  // totalViews: z.number().optional(),
  // rating: z.number().optional(),
  // status: z.boolean().optional(),
  createdby: z.string().optional(),
});

const formFieldList = [
  'category',
  'name',
  'bannerImage',
  'tripImage',
  'mapImage',
  'video',
  'price',
  'offerPrice',
  'pax2Price',
  'pax5Price',
  'pax10Price',
  'pax15Price',
  'pax16Price',
  'summary.duration',
  'summary.destination',
  'summary.startPoint',
  'summary.endPoint',
  'summary.groupSize',
  'summary.maxaltitude',
  'summary.bestSeason',
  'summary.difficulty',
  'summary.meals',
  'summary.accomodation',
  'summary.activities',
  'description',
  'itinerary.description',
  'createdby',
] as const;

export function AdminAddTrekking() {
  // const addTrekking = useAddTrekkingMutation();
  // const addPhoto = useAddImageMutation();
  // const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: '',
      name: '',
      bannerImage: '',
      tripImage: '',
      mapImage: '',
      video: '',
      price: '',
      isSpecialOffer: false,
      offerPrice: '',
      pax2Price: '',
      pax5Price: '',
      pax10Price: '',
      pax15Price: '',
      pax16Price: '',
      summary: {
        duration: '',
        destination: '',
        startPoint: '',
        endPoint: '',
        groupSize: '',
        maxaltitude: '',
        bestSeason: '',
        difficulty: '',
        meals: '',
        accomodation: '',
        activities: '',
      },
      description: '',
      itinerary: {
        description: '',
      },
      createdby: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <h1>Add Trekking</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
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
            name='bannerImage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Banner Image</FormLabel>
                <FormControl>
                  <Input placeholder='Banner Image' {...field} />
                </FormControl>
                <FormDescription>Enter your Banner Image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tripImage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trip Image</FormLabel>
                <FormControl>
                  <Input placeholder='Trip Image' {...field} />
                </FormControl>
                <FormDescription>Enter your Trip Image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='mapImage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Map Image</FormLabel>
                <FormControl>
                  <Input placeholder='Map Image' {...field} />
                </FormControl>
                <FormDescription>Enter your Map Image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='video'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video</FormLabel>
                <FormControl>
                  <Input placeholder='Video' {...field} />
                </FormControl>
                <FormDescription>Enter your Video.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='imageGallery'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Gallery</FormLabel>
                <FormControl>
                  <Input placeholder='Image Gallery' {...field} />
                </FormControl>
                <FormDescription>Enter your Image Gallery.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder='Price' {...field} />
                </FormControl>
                <FormDescription>Enter your Price.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='isSpecialOffer'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is Special Offer</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onChange={field.onChange} />
                </FormControl>
                <FormDescription>Enter your Is Special Offer.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='isSpanish'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is Spanish</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onChange={field.onChange} />
                </FormControl>
                <FormDescription>Enter your Is Spanish.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='offerPrice'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Offer Price</FormLabel>
                <FormControl>
                  <Input placeholder='Offer Price' {...field} />
                </FormControl>
                <FormDescription>Enter your Offer Price.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pax2Price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price For 2</FormLabel>
                <FormControl>
                  <Input placeholder='1000' {...field} />
                </FormControl>
                <FormDescription>Enter price for 2.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pax5Price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price For 5</FormLabel>
                <FormControl>
                  <Input placeholder='1000' {...field} />
                </FormControl>
                <FormDescription>Enter price for 5.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pax5Price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price For 5</FormLabel>
                <FormControl>
                  <Input placeholder='1000' {...field} />
                </FormControl>
                <FormDescription>Enter price for 5.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pax10Price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price For 10</FormLabel>
                <FormControl>
                  <Input placeholder='1000' {...field} />
                </FormControl>
                <FormDescription>Enter price for 10.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pax15Price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price For 15</FormLabel>
                <FormControl>
                  <Input placeholder='1000' {...field} />
                </FormControl>
                <FormDescription>Enter price for 15.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pax16Price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price For 16</FormLabel>
                <FormControl>
                  <Input placeholder='1000' {...field} />
                </FormControl>
                <FormDescription>Enter price for 16.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* summary section */}
          {formFieldList.map(item => {
            return (
              <FormField
                key={item}
                control={form.control}
                name={item}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item}</FormLabel>
                    <FormControl>
                      <Input placeholder={item} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}

          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
}
