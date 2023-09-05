import BlogCard from '@/components/BlogCard';
import { useGetAllBlogQuery } from '@/hooks/adminBlog.hook';

export function Blogs() {
  const { data } = useGetAllBlogQuery();
  return (
    <div className='w-full '>
      <h3 className='text-center'>Blogs</h3>
      <div className='flex flex-col justify-center xl:flex-row'>
        <div className='grid grid-cols-1 gap-20 mx-auto my-16 place-items-center md:grid-cols-2'>
          {data?.data?.map(item => <BlogCard props={item} />)}
        </div>
        <img
          className='object-cover mx-auto mb-10 lg:my-52 w-96 h-60'
          src='/bloghelp.svg'
        />
      </div>
    </div>
  );
}
