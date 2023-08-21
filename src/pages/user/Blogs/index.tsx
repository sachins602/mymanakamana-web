import BlogCard from '@/components/BlogCard';
import { useGetAllBlogQuery } from '@/hooks/adminBlog.hook';

export function Blogs() {
  const { data } = useGetAllBlogQuery();
  return (
    <div className='w-full '>
      <h3 className='ml-96'>Blogs</h3>
      <div className='flex flex-row justify-center gap-20'>
        <div className='grid grid-cols-1 gap-20 my-16 place-items-center md:grid-cols-2'>
          {data?.data?.map(item => <BlogCard props={item} />)}
        </div>
        <img className='object-cover my-52 w-80 h-52' src='/bloghelp.svg' />
      </div>
    </div>
  );
}
