import { Outlet } from 'react-router-dom';

function AdminTrekking() {
  return (
    <div className='items-center w-full'>
      <Outlet />
    </div>
  );
}

export default AdminTrekking;
