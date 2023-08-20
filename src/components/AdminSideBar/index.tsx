// import { useNavigate } from 'react-router-dom';
import { AiOutlineFolderAdd, AiOutlineUserAdd } from 'react-icons/ai';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { MdOutlinePageview } from 'react-icons/md';
import { BsCalendar4Event } from 'react-icons/bs';

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
            className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
              <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
            </svg>
            <span className='ml-3'>Dashboard</span>
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
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                  clipRule='evenodd'
                />
              </svg>
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
            className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
              <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
            </svg>
            <span className='ml-3'>Bookings</span>
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
