import { useGetBlogByIdQuery } from '@/hooks/adminBlog.hook';
import { useLocation } from 'react-router-dom';

export function BlogDetail() {
  const { state } = useLocation();
  const { data } = useGetBlogByIdQuery(state.blogId);
  return (
    <div className='w-full'>
      <img className='w-full h-[450px]' src='/activitiesbg.png' />
      <div className='xl:w-[60%] mx-auto space-y-12'>
        <h2>{data?.data?.[0].name}</h2>
        <h6>{data?.data?.[0].updatedon?.toString()}</h6>
        <img
          src={
            `${import.meta.env.VITE_BACKEND_URL}media/file/` +
            data?.data?.[0].image
          }
        />
        <p>{data?.data?.[0].description}</p>
      </div>
    </div>
  );
}
