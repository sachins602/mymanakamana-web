"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { AiFillStar } from 'react-icons/ai'


export function TestimonialSlider() {

  const testimonialList = [
    {
      name: "Jack Grealish",
      title: "Manchester, England l Aug 02,2022",
      rating: 5,
      place_name: "Wonderful Base Camp Trekking",
      review_text: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."

    },
    {
      name: "Jack Grealish",
      title: "Manchester, England l Aug 02,2022",
      rating: 5,
      place_name: "Wonderful Base Camp Trekking",
      review_text: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."

    },
    {
      name: "Jack Grealish",
      title: "Manchester, England l Aug 02,2022",
      rating: 5,
      place_name: "Wonderful Base Camp Trekking",
      review_text: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."

    },
    {
      name: "Jack Grealish",
      title: "Manchester, England l Aug 02,2022",
      rating: 5,
      place_name: "Wonderful Base Camp Trekking",
      review_text: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."

    },


  ]
  return (
    <div className='lg:pl-28 md:pl-10 relative flex items-center'>

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
        navigation={true}
        style={{
          padding: "30px"
        }}
      >
        {
          testimonialList.map((destination, key) => {
            return <SwiperSlide className={` shadow-[0_3px_10px_rgb(0,0,0,0.4)] `} key={key}>

              <div className="bg-white px-4 pb-4 text-sm pt-10">
                <h5 className="font-semibold text-sm"> {destination.name} </h5>
                <p className="flex items-center py-4 text-xs"> {destination.title} </p>


                <div className="flex text-yellow-500 pb-2 text-lg">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>

                <h5 className="font-semibold text-xs"> {destination.name} </h5>
                <p className="flex items-center py-4 text-xs"> {destination.review_text} </p>

              </div>

              <div className="absolute -translate-y-[50%] top-0 translate-x-[30%] z-50">
                <img src="/man.png" />
              </div>

            </SwiperSlide>
          })
        }

      </Swiper>
    </div>
  );
}