'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { AiFillStar } from 'react-icons/ai';
import { useGetAllBlogQuery } from '@/hooks/adminBlog.hook';

export function TestimonialSlider() {
  const { data } = useGetAllBlogQuery();

  //   {
  //     name: 'Jack Grealish',
  //     title: 'Manchester, England l Aug 02,2022',
  //     rating: 5,
  //     place_name: 'Wonderful Base Camp Trekking',
  //     review_text:
  //       'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
  //   },
  //   {
  //     name: 'Jack Grealish',
  //     title: 'Manchester, England l Aug 02,2022',
  //     rating: 5,
  //     place_name: 'Wonderful Base Camp Trekking',
  //     review_text:
  //       'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
  //   },
  //   {
  //     name: 'Jack Grealish',
  //     title: 'Manchester, England l Aug 02,2022',
  //     rating: 5,
  //     place_name: 'Wonderful Base Camp Trekking',
  //     review_text:
  //       'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
  //   },
  //   {
  //     name: 'Jack Grealish',
  //     title: 'Manchester, England l Aug 02,2022',
  //     rating: 5,
  //     place_name: 'Wonderful Base Camp Trekking',
  //     review_text:
  //       'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
  //   },
  // ];
  return (
    <div className='relative flex items-center lg:pl-28 md:pl-10'>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          1280: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={40}
        style={{
          padding: '30px',
        }}
      >
        {data?.data?.map((destination, key) => {
          return (
            <SwiperSlide
              className={` shadow-[0_3px_10px_rgb(0,0,0,0.4)] `}
              key={key}
            >
              <div className='px-4 pt-10 pb-4 text-sm bg-white h-60'>
                <h5 className='text-sm font-semibold'> {destination.name} </h5>
                <p className='flex items-center py-4 text-xs'>
                  {' '}
                  {destination.trip}{' '}
                </p>

                <div className='flex pb-2 text-lg text-yellow-500'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>

                <h5 className='text-xs font-semibold'> {destination.name} </h5>
                <p className='flex items-center h-20 py-4 overflow-hidden text-xs'>
                  {' '}
                  {destination.description}{' '}
                </p>
              </div>

              <div className='absolute -translate-y-[50%] top-0 translate-x-[30%] z-50'>
                <img src='/man.png' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
