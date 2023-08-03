'use client';

import { Button } from '../ui/button';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
export function MajorDestination() {
  const majorDestinationList = [
    {
      title: 'Everest View',
      imgLink: '/everest.png',
      style: '',
    },
    {
      title: 'Annapurna',
      imgLink: '/annapurna.png',
      style: '',
    },
    {
      title: 'Khaptad',
      imgLink: '/khaptad.png',
      style: '',
    },
    {
      title: 'Pokhara',
      imgLink: '/pokhara.png',
      style: '',
    },
    {
      title: 'Langtang',
      imgLink: '/everest.png',
      style: '',
    },
    {
      title: 'Lumbini',
      imgLink: '/annapurna.png',
      style: '',
    },
    {
      title: 'Poon Hill',
      imgLink: '/pokhara.png',
      style: '',
    },
    {
      title: 'Langtang',
      imgLink: '/everest.png',
      style: '',
    },
    {
      title: 'Lumbini',
      imgLink: '/annapurna.png',
      style: '',
    },
    {
      title: 'Poon Hill',
      imgLink: '/pokhara.png',
      style: '',
    },
    {
      title: 'Langtang',
      imgLink: '/everest.png',
      style: '',
    },
  ];
  return (
    <div className='container w-full'>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        watchOverflow={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        freeMode={true}
        navigation={true}
      >
        {majorDestinationList.map((destination, key) => {
          return (
            <SwiperSlide
              className='relative bg-blend-darken'
              key={`major-${destination.title}${key}`}
            >
              <img src={destination.imgLink} />
              <div className='absolute z-10 bottom-0 left-[28%]'>
                <h2 className='pb-4 text-2xl text-center text-white'>
                  {' '}
                  {destination.title}{' '}
                </h2>
                <Button className='bg-green-700'>Book Now </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
