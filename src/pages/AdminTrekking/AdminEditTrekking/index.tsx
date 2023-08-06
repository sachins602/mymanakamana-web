import { EditTrip } from '@/@types/user';
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
import { useAuth } from '@/contexts/AuthContext';
import { usePostTripQuery } from '@/hooks/adminTrip.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

function formatString(name: string) {
  return name
    .split('.')
    .map(item => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(' ');
}

const formSchema = z.object({
  category: z.string(),
  name: z.string(),
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

export function AdminEditTrekking({ props }: { props: EditTrip }) {
  const addTrekking = usePostTripQuery();
  const { user } = useAuth();
  // const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: props.category,
      name: props.name,
      price: props.price,
      offerPrice: props.offerPrice,
      summary: {
        destination: props.summary?.destination,
        startPoint: props.summary?.startPoint,
        endPoint: props.summary?.endPoint,
        maxaltitude: props.summary?.maxaltitude,
        bestSeason: props.summary?.bestSeason,
        difficulty: props.summary?.difficulty,
        meals: props.summary?.meals,
        accomodation: props.summary?.accomodation,
        activities: props.summary?.activities,
      },
      description: props.description,
      itinerary: {
        description: props.description,
        details: props.itinerary?.details?.map(item => ({
          head: item.head,
          headDetails: item.headDetails,
          accomodation: item.accomodation,
          activity: item.activity,
          activityDuration: item.activityDuration,
          elevation: item.elevation,
        })),
      },
      exclusion: props.exclusion?.map(item => ({ text: item })),
      inclusion: props.inclusion?.map(item => ({ text: item })),
      tripHighlight: props.tripHighlight?.map(item => ({ text: item })),
      isSpecialOffer: props.isSpecialOffer,
      status: props.status,
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

    addTrekking.mutate(
      {
        _id: props._id,
        category: values.category,
        name: values.name,
        price: values.price,
        offerPrice: values.offerPrice,
        bannerImage: props.bannerImage,
        tripImage: props.tripImage,
        mapImage: props.mapImage,
        summary: {
          accomodation: values.summary.accomodation,
          activities: values.summary.activities,
          bestSeason: values.summary.bestSeason,
          difficulty: values.summary.difficulty,
          duration: values.summary.duration,
          endPoint: values.summary.endPoint,
          meals: values.summary.meals,
          maxaltitude: values.summary.maxaltitude,
          startPoint: values.summary.startPoint,
          destination: values.summary.destination,
        },
        description: values.description,
        itinerary: {
          description: values.itinerary.description,
          details: values.itinerary.details.map(item => ({
            head: item.head,
            headDetails: item.headDetails,
            accomodation: item.accomodation,
            activity: item.activity,
            activityDuration: item.activityDuration,
            elevation: item.elevation,
          })),
        },
        tripHighlight: values.tripHighlight?.map(item => item.text),
        inclusion: values.inclusion?.map(item => item.text),
        exclusion: values.exclusion?.map(item => item.text),
        isSpecialOffer: values.isSpecialOffer,
        status: values.status,
        createdby: user?.id,
      },
      {
        onSuccess: res => {
          console.log('success', res);
        },
        onError: error => {
          console.log('error', error);
        },
      },
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=''>
        <div className='space-y-6'>
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
        </div>

        <div className='space-y-6'>
          <div className='space-y-6'>
            {itineraryDetailsFields.map((item, index) => {
              return (
                <div className='space-y-6' key={item.id}>
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
          <div className='space-y-6'>
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
                <div className='flex flex-row items-end gap-4' key={item.id}>
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
              Add Trip Inclusions
            </Button>
          </div>
          <div>
            {exclusionFields.map((item, index) => {
              return (
                <div className='flex flex-row items-end gap-4' key={item.id}>
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
              Add Trip Exclusions
            </Button>
          </div>
        </div>

        <div className='space-y-8'>
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
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
