// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';

// import { AiOutlineEdit } from 'react-icons/ai';
// import AdminEditTrekkingForm from '../AdminEditTrekking';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { MdOutlineAutoDelete } from 'react-icons/md';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/components/ui/alert-dialog';
// import { Button } from '@/components/ui/button';
// import { Data } from '@/@types/user';
// import {
//   useDeleteTrekkingQuery,
//   useGetAllTrekkingQuery,
// } from '@/hooks/adminTrekking.hook';

function AdminViewTrekking() {
  // const { data: trekkingData, refetch } = useGetAllTrekkingQuery();

  // const deleteTrekking = useDeleteTrekkingQuery();

  // function handleDelete(item: Data): void {
  //   console.log(item);
  //   // deleteTrekking.mutate(
  //   //   { id: item._id as string },
  //   //   {
  //   //     onSuccess: res => {
  //   //       refetch();
  //   //       console.log(res);
  //   //     },
  //   //     onError: error => {
  //   //       console.log(error);
  //   //     },
  //   //   },
  //   // );
  // }

  return (
    <div className='w-full'>
      <h1>Trekking</h1>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {/* {trekkingData?.data?.map((item, index) => (
          <Card key={index} className='w-72 h-80'>
            <CardHeader className='items-center'>
              <div className='space-x-8'>
                <Popover>
                  <PopoverTrigger>
                    <AiOutlineEdit className='w-6 h-6' />
                  </PopoverTrigger>
                  <PopoverContent>
                    <AdminEditTrekkingForm props={item} />
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
              <CardTitle>Name: {item.name}</CardTitle>
              <CardDescription>Slogan: {item.slogan}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                className=''
                src={'http://localhost:4000/api/media/file/' + item.image}
                alt={item.name}
              />
            </CardContent>
          </Card>
        ))} */}
      </div>
    </div>
  );
}

export default AdminViewTrekking;
