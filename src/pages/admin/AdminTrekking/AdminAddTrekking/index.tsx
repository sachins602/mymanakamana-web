import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  // FormDescription,
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
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import { usePostTripQuery } from '@/hooks/adminTrip.hook';
import { useAddImageMutation } from '@/hooks/image.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
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
  const addTrekking = usePostTripQuery();
  const { user } = useAuth();
  const { mutate: addBannerImage, isSuccess: bannerImageSuccess } =
    useAddImageMutation();
  const { mutate: addTripImage, isSuccess: tripImageSuccess } =
    useAddImageMutation();
  const { mutate: addMapImage, isSuccess: mapImageSuccess } =
    useAddImageMutation();
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [imageNames, setImageNames] = useState<{
    bannerImage?: string;
    tripImage?: string;
    mapImage?: string;
  }>();
  const [formData, setFormData] = useState<z.infer<typeof formSchema>>();

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
    const bannerFormData = new FormData();
    const tripFormData = new FormData();
    const mapFormData = new FormData();
    bannerFormData.append('image', values.bannerImage);
    tripFormData.append('image', values.tripImage);
    mapFormData.append('image', values.mapImage);

    addBannerImage(bannerFormData, {
      onSuccess: data => {
        queryClient.invalidateQueries({
          queryKey: ['postImage'],
        });
        setImageNames(prev => ({
          ...prev,
          bannerImage: data.path,
        }));
      },
      onError: error => {
        console.log('error', error);
      },
    });
    addTripImage(tripFormData, {
      onSuccess: data => {
        queryClient.invalidateQueries({
          queryKey: ['postImage'],
        });
        setImageNames(prev => ({
          ...prev,
          tripImage: data.path,
        }));
      },
      onError: error => {
        console.log('error', error);
      },
    });
    addMapImage(mapFormData, {
      onSuccess: data => {
        queryClient.invalidateQueries({
          queryKey: ['postImage'],
        });
        setImageNames(prev => ({
          ...prev,
          mapImage: data.path,
        }));
      },
      onError: error => {
        console.log('error', error);
      },
    });
    setFormData(values);
  }

  useEffect(() => {
    if (
      tripImageSuccess === true &&
      mapImageSuccess === true &&
      bannerImageSuccess === true &&
      formData
    ) {
      addTrekking.mutate(
        {
          _id: '',
          category: formData.category,
          name: formData.name,
          price: formData.price,
          offerPrice: formData.offerPrice,
          bannerImage: imageNames?.bannerImage,
          tripImage: imageNames?.tripImage,
          mapImage: imageNames?.mapImage,
          summary: {
            accomodation: formData.summary.accomodation,
            activities: formData.summary.activities,
            bestSeason: formData.summary.bestSeason,
            difficulty: formData.summary.difficulty,
            duration: formData.summary.duration,
            endPoint: formData.summary.endPoint,
            meals: formData.summary.meals,
            maxaltitude: formData.summary.maxaltitude,
            startPoint: formData.summary.startPoint,
            destination: formData.summary.destination,
          },
          description: formData.description,
          itinerary: {
            description: formData.itinerary.description,
            details: formData.itinerary.details.map(item => ({
              head: item.head,
              headDetails: item.headDetails,
              accomodation: item.accomodation,
              activity: item.activity,
              activityDuration: item.activityDuration,
              elevation: item.elevation,
            })),
          },
          tripHighlight: formData.tripHighlight?.map(item => item.text),
          inclusion: formData.inclusion?.map(item => item.text),
          exclusion: formData.exclusion?.map(item => item.text),
          isSpecialOffer: formData.isSpecialOffer,
          status: formData.status,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tripImageSuccess, mapImageSuccess, bannerImageSuccess, formData]);
  return (
    <div className='w-full'>
      <h1>Add Packages inside categories</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid w-full grid-cols-2 gap-6 lg:grid-cols-4'
        >
          <div className='space-y-6'>
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
                      <SelectItem value='Trekking'>Trekking</SelectItem>
                      <SelectItem value='Tour'>Tours</SelectItem>
                      <SelectItem value='Activity'>Activity</SelectItem>
                      <SelectItem value='Packages'>Packages</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can choose your Category
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <Button
                      type='button'
                      onClick={() => removeInclusion(index)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
              <Button
                type='button'
                onClick={() => appendInclusion({ text: '' })}
              >
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
                    <Button
                      type='button'
                      onClick={() => removeExclusion(index)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
              <Button
                type='button'
                onClick={() => appendExclusion({ text: '' })}
              >
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
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
}
