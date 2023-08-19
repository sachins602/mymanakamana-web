import { SlCalender } from 'react-icons/sl';
import { BiSupport } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

export function Whyus() {
  return (
    <div>
      <h1 className='py-16 text-3xl text-center'>
        Why <span className='font-semibold'>Choose Us</span>
      </h1>
      <div className='flex flex-col items-center gap-8 p-10 sm:flex-row xl:mx-20'>
        <div className='grid md:grid-cols-2 gap-x-20 gap-y-16'>
          <div>
            <h3 className='flex items-start'>
              <SlCalender className='text-2xl text-green-500 ' />
              <span className='pl-2 text-sm font-medium'>Fast Booking</span>
            </h3>
            <p className='pt-1 pl-8 text-xs'>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
          <div>
            <h3 className='flex items-start'>
              <BiSupport className='text-3xl text-green-500 ' />
              <span className='pl-2 text-sm font-medium'>Support Team</span>
            </h3>
            <p className='pt-1 pl-8 text-xs'>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
          <div>
            <h3 className='flex items-start'>
              <AiFillCamera className='text-3xl text-green-500 ' />
              <span className='pl-2 text-sm font-medium'>Beautiful Places</span>
            </h3>
            <p className='pt-1 pl-8 text-xs'>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
          <div>
            <h3 className='flex items-start'>
              <BsHeartFill className='text-2xl text-green-500 ' />
              <span className='pl-2 text-sm font-medium'>
                Memorable Experience
              </span>
            </h3>
            <p className='pt-1 pl-8 text-xs'>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
        </div>
        <img
          className='items-center rounded-full w-52 h-52'
          src='/packagesbg.png'
        />
      </div>
    </div>
  );
}
