import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationPin } from 'react-icons/md';

export function AboutUs() {
  return (
    <div className='flex gap-x-10'>
      <div className='w-[60%]'>
        <h1 className='mb-1 text-3xl font-semibold text-red-700 uppercase'>
          ABOUT US
        </h1>
        <div className='h-[2px] bg-green-600' />
        <p className='pt-4 text-sm'>
          {' '}
          <span className='text-xl font-semibold text-green-600'>
            {' '}
            Mai Manakamana Travel{' '}
          </span>{' '}
          dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
          accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
          risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
          scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus
          nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p className='pt-4 pb-12 text-sm'>
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
          non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
          lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
          sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
          nisi, ac posuere leo.
        </p>
        <ul className='font-medium'>
          <li className='flex items-center'>
            <MdEmail className='mr-2 text-2xl' />
            <a href='mailto:mymankamana@gmail.com'>mymankamana@gmail.com</a>
          </li>
          <li className='flex items-center py-5'>
            <BsTelephoneFill className='mr-2 text-xl' />
            <a href='tel:+977 9801010101'>+977 9801010101</a>
          </li>
          <li className='flex items-center'>
            <MdLocationPin className='mr-2 text-2xl' />
            <a href='http://'>Kathmandu, Nepal</a>
          </li>
        </ul>
      </div>
      <div className='w-[40%]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927001396656!2d85.33981835!3d27.6946846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1688730126926!5m2!1sen!2snp'
          width='510'
          height='450'
          style={{ border: 0 }}
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
}
