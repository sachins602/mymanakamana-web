// import { useNavigate } from 'react-router-dom';
import {
  AiOutlineDashboard,
  AiOutlineFolderAdd,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { MdOutlinePageview, MdPendingActions } from 'react-icons/md';
import { BsCalendar4Event } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';

export function AdminSideBar() {
  // const navigate = useNavigate();
  return (
    <aside
      id='default-sidebar'
      className='fixed top-0 left-0 z-40 w-64 h-screen'
      aria-label='Sidenav'
    >
      <div className='h-full px-3 py-5 overflow-y-auto bg-white border-r border-gray-200'>
        <Accordion type='single' collapsible className='w-full space-y-2'>
          <a
            href='/admin'
            className='flex flex-row items-center justify-between text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
          >
            <AiOutlineDashboard className='w-6 h-6 mr-4' />
            <h3 className='mr-8'>Dashboard</h3>
          </a>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              <BsCalendar4Event className='w-6 h-6 mr-4' />
              Packages
            </AccordionTrigger>
            <AccordionContent>
              <ul id='dropdown-pages' className='py-2 space-y-2 '>
                <li>
                  <a
                    href='/admin/trekking/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/trekking/add'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <AiOutlineFolderAdd className='w-6 h-6 mr-4' />
                    Add
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              <FaBlog className='w-6 h-6 mr-4' />
              Blogs
            </AccordionTrigger>
            <AccordionContent>
              <ul id='dropdown-pages' className='py-2 space-y-2 '>
                <li>
                  <a
                    href='/admin/blog/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/blog/add'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <AiOutlineFolderAdd className='w-6 h-6 mr-4' />
                    Add
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <a
            href='/admin/booking'
            className='flex flex-row items-center justify-between text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
          >
            <MdPendingActions className='w-6 h-6 mr-4' />
            <h3 className='mr-10'>Bookings</h3>
          </a>
        </Accordion>
      </div>
      <div className='absolute bottom-0 left-0 z-20 justify-center hidden w-full p-4 space-x-4 bg-white border-r border-gray-200 lg:flex'>
        <a
          href='/admin/profile'
          className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
        >
          <AiOutlineUserAdd className='w-6 h-6' />
        </a>
      </div>
    </aside>
  );
}
