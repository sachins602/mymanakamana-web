import Image from "next/image";
import { SlCalender } from 'react-icons/sl'
import { BiSupport } from 'react-icons/bi'
import { AiFillCamera } from 'react-icons/ai'
import { BsHeartFill } from 'react-icons/bs'

export function Whyus() {
  return (
    <div>
      <h1 className="text-center text-3xl py-16">Why <span className="font-semibold">Choose Us</span></h1>
      <div className="flex flex-col gap-8">

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          <div>
            <h3 className="flex items-start">
              <SlCalender className="text-2xl text-green-500 " />
              <span className="font-medium pl-2 text-sm">Fast Booking</span>
            </h3>
            <p className="text-xs pt-1 pl-8">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </p>
          </div>
          <div>
            <h3 className="flex items-start">
              <BiSupport className="text-3xl text-green-500 " />
              <span className="font-medium pl-2 text-sm">Support Team</span>
            </h3>
            <p className="text-xs pt-1 pl-8">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </p>
          </div>
          <div>
            <h3 className="flex items-start">
              <AiFillCamera className="text-3xl text-green-500 " />
              <span className="font-medium pl-2 text-sm">Beautiful Places</span>
            </h3>
            <p className="text-xs pt-1 pl-8">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </p>
          </div>
          <div>
            <h3 className="flex items-start">
              <BsHeartFill className="text-2xl text-green-500 " />
              <span className="font-medium pl-2 text-sm">Memorable Experience</span>
            </h3>
            <p className="text-xs pt-1 pl-8">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </p>
          </div>


        </div>

        <div className="mx-auto">
          <Image src='/mountain.jpeg' width={300} height={300} alt="person travel tour" />

        </div>
      </div>
    </div>
  )
}