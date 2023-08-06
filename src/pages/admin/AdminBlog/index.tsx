import { Outlet } from 'react-router-dom';

function AdminBlog() {
  return (
    <div className='items-center w-full'>
      <Outlet />
    </div>
  );
}

export default AdminBlog;
