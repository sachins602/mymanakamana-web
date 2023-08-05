import { Outlet } from 'react-router-dom';

function AdminCategory() {
  return (
    <div className='items-center w-full'>
      <Outlet />
    </div>
  );
}

export default AdminCategory;
