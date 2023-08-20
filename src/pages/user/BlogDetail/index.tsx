import { useGetBlogByIdQuery } from '@/hooks/adminBlog.hook';
import { useLocation } from 'react-router-dom';

export function BlogDetail() {
  const { state } = useLocation();
  console.log(state.blogId);
  const { data } = useGetBlogByIdQuery(state.blogId);
  return (
    <div className='w-full'>
      <img className='w-full h-[450px]' src='/activitiesbg.png' />
      <div className='w-[80%]'>
        <h3>{data?.data?.[0].name}</h3>
        <h5>{data?.data?.[0].updatedon?.toString()}</h5>
        <img
          src={'http://localhost:4000/api/media/file/' + data?.data?.[0].image}
        />
        <p>{data?.data?.[0].description}</p>
      </div>
    </div>
  );
}
