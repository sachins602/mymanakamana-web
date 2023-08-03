import { MdOutlineAlarm } from 'react-icons/md'
import { Button } from '../ui/button'

export function BlogList() {
  return (
    <div className=''>
      <h1 className='text-3xl pb-8'>Interesting <span className='text-green-500 font-bold'>Blogs</span></h1>
      <div className='flex items-center flex-col relative'>
        <div>
          <img
            src="/mountain.jpeg"
          />
        </div>
        <div className='bg-white shadow-lg shadow-green-200 absolute z-50 top-[50%] w-[90%] py-4 px-2'>
          <div className='pb-4'>
            <h2 className='text-sm font-semibold'>Travel Tips During Langtang Tour</h2>
            <h3 className='flex items-center text-xs text-[#696666] pt-2 pb-2'>
              <MdOutlineAlarm className='text-base' />
              <span className='font-semibold pl-2'>Aug 2</span>
            </h3>
            <p className='text-xs'>
              Dorem ipsum dolor sit amet, conse adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
            </p>
          </div>
          <Button className='px-6 '>Read More</Button>
        </div>

      </div>
    </div>
  )
}