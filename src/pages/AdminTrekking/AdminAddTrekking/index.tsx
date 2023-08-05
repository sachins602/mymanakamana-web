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
import { Switch } from '@/components/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
function formatString(name: string) {
  return name
    .split('.')
    .map(item => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(' ');
}

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
  bannerImage: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    )
    .optional(),
  tripImage: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    )
    .optional(),
  mapImage: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    )
    .optional(),
  price: z.string(),
  isSpecialOffer: z.boolean().optional(),
  offerPrice: z.string().optional(),
  summary: z.object({
    duration: z.string(),
    destination: z.string(),
    startPoint: z.string(),
    endPoint: z.string(),
    maxaltitude: z.string().optional(),
    bestSeason: z.string().optional(),
    difficulty: z.string().optional(),
    meals: z.string().optional(),
    accomodation: z.string().optional(),
    activities: z.string().optional(),
  }),
  tripHighlight: z
    .array(
      z.object({
        text: z.string(),
      }),
    )
    .optional(),
  description: z.string(),
  itinerary: z.object({
    description: z.string(),
    details: z.array(
      z.object({
        head: z.string(),
        headDetails: z.string(),
        elevation: z.string().optional(),
        activity: z.string().optional(),
        activityDuration: z.string().optional(),
        accomodation: z.string().optional(),
      }),
    ),
  }),
  inclusion: z
    .array(
      z.object({
        text: z.string(),
      }),
    )
    .optional(),
  exclusion: z
    .array(
      z.object({
        text: z.string(),
      }),
    )
    .optional(),
  status: z.boolean().default(true),
});

const formFieldList = [
  'category',
  'name',
  'price',
  'offerPrice',
  'summary.duration',
  'summary.destination',
  'summary.startPoint',
  'summary.endPoint',
  'summary.maxaltitude',
  'summary.bestSeason',
  'summary.difficulty',
  'summary.meals',
  'summary.accomodation',
  'summary.activities',
  'description',
  'itinerary.description',
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
      price: '',
      offerPrice: '',
      summary: {
        duration: '',
        destination: '',
        startPoint: '',
        endPoint: '',
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
    },
  });

  const {
    fields: tripHighlightFields,
    append: appendTripHighlight,
    remove: removeTripHighlight,
  } = useFieldArray({
    name: 'tripHighlight',
    control: form.control,
  });

  const {
    fields: itineraryDetailsFields,
    append: appendItineraryDetails,
    remove: removeItineraryDetails,
  } = useFieldArray({
    name: 'itinerary.details',
    control: form.control,
  });
  const {
    fields: inclusionFields,
    append: appendInclusion,
    remove: removeInclusion,
  } = useFieldArray({
    name: 'inclusion',
    control: form.control,
  });
  const {
    fields: exclusionFields,
    append: appendExclusion,
    remove: removeExclusion,
  } = useFieldArray({
    name: 'exclusion',
    control: form.control,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className='w-96'>
      <h1>Add Trekking</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {formFieldList.map(item => {
            return (
              <FormField
                key={item}
                control={form.control}
                name={item}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formatString(field.name)}</FormLabel>
                    <FormControl>
                      <Input placeholder={item} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}

          <div>
            {itineraryDetailsFields.map((item, index) => {
              return (
                <div key={item.id}>
                  <FormField
                    control={form.control}
                    name={`itinerary.details.${index}.head`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='head' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`itinerary.details.${index}.headDetails`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='headDetails' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`itinerary.details.${index}.elevation`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='elevation' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`itinerary.details.${index}.activity`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='activity' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`itinerary.details.${index}.activityDuration`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='activityDuration' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`itinerary.details.${index}.accomodation`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='accomodation' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type='button'
                    onClick={() => removeItineraryDetails(index)}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
            <Button
              type='button'
              onClick={() =>
                appendItineraryDetails({
                  head: '',
                  headDetails: '',
                  elevation: '',
                  activity: '',
                  activityDuration: '',
                })
              }
            >
              Add Itinerary Details
            </Button>
          </div>
          <div>
            {tripHighlightFields.map((item, index) => {
              return (
                <div className='flex flex-row items-center' key={item.id}>
                  <FormField
                    control={form.control}
                    name={`tripHighlight.${index}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='highlights' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type='button'
                    onClick={() => removeTripHighlight(index)}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
            <Button
              type='button'
              onClick={() => appendTripHighlight({ text: '' })}
            >
              Add Trip Highlight
            </Button>
          </div>
          <div>
            {inclusionFields.map((item, index) => {
              return (
                <div className='flex flex-row items-center' key={item.id}>
                  <FormField
                    control={form.control}
                    name={`inclusion.${index}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='inclusion' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='button' onClick={() => removeInclusion(index)}>
                    Delete
                  </Button>
                </div>
              );
            })}
            <Button type='button' onClick={() => appendInclusion({ text: '' })}>
              Add Trip Highlight
            </Button>
          </div>
          <div>
            {exclusionFields.map((item, index) => {
              return (
                <div className='flex flex-row items-center' key={item.id}>
                  <FormField
                    control={form.control}
                    name={`exclusion.${index}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formatString(field.name)}</FormLabel>
                        <FormControl>
                          <Input placeholder='exclsuion' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='button' onClick={() => removeExclusion(index)}>
                    Delete
                  </Button>
                </div>
              );
            })}
            <Button type='button' onClick={() => appendExclusion({ text: '' })}>
              Add Trip Highlight
            </Button>
          </div>
          <FormField
            control={form.control}
            name='isSpecialOffer'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formatString(field.name)}</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formatString(field.name)}</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bannerImage'
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Banner Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Banner Image'
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

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tripImage'
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Trip Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Trip Image'
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

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='mapImage'
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Map Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Map Image'
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
