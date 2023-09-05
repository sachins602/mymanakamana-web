import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  useDeleteTrekkingQuery,
  useGetTripsQuery,
} from '@/hooks/adminTrip.hook';

import { AiOutlineEdit } from 'react-icons/ai';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MdOutlineAutoDelete } from 'react-icons/md';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { EditTrip, TripData } from '@/@types/user';
import { AdminEditTrekking } from '../AdminEditTrekking';
import { useToast } from '@/components/ui/use-toast';

function AdminViewTrekking() {
  const { data: trekkingData, refetch } = useGetTripsQuery();
  const { toast } = useToast();
  const deleteTrekking = useDeleteTrekkingQuery();

  function handleDelete(item: TripData): void {
    deleteTrekking.mutate(
      { id: item._id as string },
      {
        onSuccess: res => {
          refetch();
          toast({
            variant: 'success',
            title: res.api_status,
            description: 'Your trip has been deleted successfully',
          });
        },
        onError: () => {
          toast({
            variant: 'destructive',
            title: 'Error',
            description:
              'Something went wrong while deleting your trip. Please try again!',
          });
        },
      },
    );
  }

  return (
    <div className='w-full'>
      <h1>Packages</h1>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {trekkingData?.data?.map((item, index) => (
          <Card key={index} className='w-72 h-80'>
            <CardHeader className='items-center'>
              <div className='space-x-8'>
                <Popover>
                  <PopoverTrigger>
                    <AiOutlineEdit className='w-6 h-6' />
                  </PopoverTrigger>
                  <PopoverContent className='overflow-y-scroll w-96 max-h-[500px]'>
                    <AdminEditTrekking props={item as EditTrip} />
                  </PopoverContent>
                </Popover>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant='outline'>
                      <MdOutlineAutoDelete className='w-6 h-6 text-red-500' />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete and remove your data from database.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(item)}
                        className='bg-red-500'
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <CardTitle>Name: {item.category}</CardTitle>
              <CardDescription>Slogan: {item.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                className=''
                src={
                  `${import.meta.env.VITE_BACKEND_URL}media/file/` +
                  item.bannerImage
                }
                alt={item.name}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminViewTrekking;
