// import { useNavigate } from 'react-router-dom';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { MdOutlinePageview } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
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
              <BiCategoryAlt className='w-6 h-6 mr-4' />
              Categories
            </AccordionTrigger>
            <AccordionContent>
              <ul id='dropdown-pages' className='py-2 space-y-2 '>
                <li>
                  <a
                    href='/admin/category/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/category/add'
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
              <BsCalendar4Event className='w-6 h-6 mr-4' />
              Trekking
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
          <AccordionItem value='item-3'>
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
              Tour
            </AccordionTrigger>
            <AccordionContent>
              <ul id='dropdown-pages' className='py-2 space-y-2 '>
                <li>
                  <a
                    href='/admin/category/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/category/add'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <AiOutlineFolderAdd className='w-6 h-6 mr-4' />
                    Add
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
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
              Activities
            </AccordionTrigger>
            <AccordionContent>
              <ul id='dropdown-pages' className='py-2 space-y-2 '>
                <li>
                  <a
                    href='/admin/category/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/category/add'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <AiOutlineFolderAdd className='w-6 h-6 mr-4' />
                    Add
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
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
                    href='/admin/category/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/category/add'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <AiOutlineFolderAdd className='w-6 h-6 mr-4' />
                    Add
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
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
              Bookings
            </AccordionTrigger>
            <AccordionContent>
              <ul id='dropdown-pages' className='py-2 space-y-2 '>
                <li>
                  <a
                    href='/admin/category/view'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <MdOutlinePageview className='w-6 h-6 mr-4' />
                    View
                  </a>
                </li>
                <li>
                  <a
                    href='/admin/category/add'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100'
                  >
                    <AiOutlineFolderAdd className='w-6 h-6 mr-4' />
                    Add
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='absolute bottom-0 left-0 z-20 justify-center hidden w-full p-4 space-x-4 bg-white border-r border-gray-200 lg:flex'>
        <a
          href='#'
          className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
        >
          <svg
            aria-hidden='true'
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
          </svg>
        </a>
        <a
          href='#'
          data-tooltip-target='tooltip-settings'
          className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
        >
          <svg
            aria-hidden='true'
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
              clipRule='evenodd'
            />
          </svg>
        </a>
        <div
          id='tooltip-settings'
          role='tooltip'
          className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip'
        >
          Settings page
          <div className='tooltip-arrow' data-popper-arrow='' />
        </div>
        <button
          type='button'
          data-dropdown-toggle='language-dropdown'
          className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
        >
          <svg
            aria-hidden='true'
            className='h-5 w-5 rounded-full mt-0.5'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 3900 3900'
          >
            <path fill='#b22234' d='M0 0h7410v3900H0z' />
            <path
              d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
              stroke='#fff'
              strokeWidth={300}
            />
            <path fill='#3c3b6e' d='M0 0h2964v2100H0z' />
            <g fill='#fff'>
              <g id='d'>
                <g id='c'>
                  <g id='e'>
                    <g id='b'>
                      <path
                        id='a'
                        d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                      />
                      <use xlinkHref='#a' y={420} />
                      <use xlinkHref='#a' y={840} />
                      <use xlinkHref='#a' y={1260} />
                    </g>
                    <use xlinkHref='#a' y={1680} />
                  </g>
                  <use xlinkHref='#b' x={247} y={210} />
                </g>
                <use xlinkHref='#c' x={494} />
              </g>
              <use xlinkHref='#d' x={988} />
              <use xlinkHref='#c' x={1976} />
              <use xlinkHref='#e' x={2470} />
            </g>
          </svg>
        </button>
        {/* Dropdown */}
        <div
          className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow'
          id='language-dropdown'
        >
          <ul className='py-1' role='none'>
            <li>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                <div className='inline-flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='h-3.5 w-3.5 rounded-full mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    id='flag-icon-css-us'
                    viewBox='0 0 512 512'
                  >
                    <g fillRule='evenodd'>
                      <g strokeWidth='1pt'>
                        <path
                          fill='#bd3d44'
                          d='M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                          transform='scale(3.9385)'
                        />
                        <path
                          fill='#fff'
                          d='M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                          transform='scale(3.9385)'
                        />
                      </g>
                      <path
                        fill='#192f5d'
                        d='M0 0h98.8v70H0z'
                        transform='scale(3.9385)'
                      />
                      <path
                        fill='#fff'
                        d='M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z'
                        transform='scale(3.9385)'
                      />
                    </g>
                  </svg>
                  English (US)
                </div>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                <div className='inline-flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='h-3.5 w-3.5 rounded-full mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    id='flag-icon-css-de'
                    viewBox='0 0 512 512'
                  >
                    <path fill='#ffce00' d='M0 341.3h512V512H0z' />
                    <path d='M0 0h512v170.7H0z' />
                    <path fill='#d00' d='M0 170.7h512v170.6H0z' />
                  </svg>
                  Deutsch
                </div>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                <div className='inline-flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='h-3.5 w-3.5 rounded-full mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    id='flag-icon-css-it'
                    viewBox='0 0 512 512'
                  >
                    <g fillRule='evenodd' strokeWidth='1pt'>
                      <path fill='#fff' d='M0 0h512v512H0z' />
                      <path fill='#009246' d='M0 0h170.7v512H0z' />
                      <path fill='#ce2b37' d='M341.3 0H512v512H341.3z' />
                    </g>
                  </svg>
                  Italiano
                </div>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                <div className='inline-flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='h-3.5 w-3.5 rounded-full mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    id='flag-icon-css-cn'
                    viewBox='0 0 512 512'
                  >
                    <defs>
                      <path
                        id='a'
                        fill='#ffde00'
                        d='M1-.3L-.7.8 0-1 .6.8-1-.3z'
                      />
                    </defs>
                    <path fill='#de2910' d='M0 0h512v512H0z' />
                    <use
                      width={30}
                      height={20}
                      transform='matrix(76.8 0 0 76.8 128 128)'
                      xlinkHref='#a'
                    />
                    <use
                      width={30}
                      height={20}
                      transform='rotate(-121 142.6 -47) scale(25.5827)'
                      xlinkHref='#a'
                    />
                    <use
                      width={30}
                      height={20}
                      transform='rotate(-98.1 198 -82) scale(25.6)'
                      xlinkHref='#a'
                    />
                    <use
                      width={30}
                      height={20}
                      transform='rotate(-74 272.4 -114) scale(25.6137)'
                      xlinkHref='#a'
                    />
                    <use
                      width={30}
                      height={20}
                      transform='matrix(16 -19.968 19.968 16 256 230.4)'
                      xlinkHref='#a'
                    />
                  </svg>
                  中文 (繁體)
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
