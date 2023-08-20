import BlogCard from '@/components/BlogCard';
import { useGetAllBlogQuery } from '@/hooks/adminBlog.hook';

export function Blogs() {
  const { data } = useGetAllBlogQuery();
  return (
    <div className='w-full'>
      <h3>Blogs</h3>
      <div className='grid grid-cols-1 gap-4 my-16 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {data?.data?.map(item => <BlogCard props={item} />)}
      </div>
    </div>
  );
}
