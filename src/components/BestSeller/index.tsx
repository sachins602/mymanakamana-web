
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { Button } from "../ui/button"
export function BestSeller() {

  const popularList = [
    {
      title: "Everest Base Camp",
      Duration: "18 days",
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 11,
      avg_star_count: 5
    },
    {
      title: "Mardi Himal Trek",
      Duration: "9 days",
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 16,
      avg_star_count: 5
    },
    {
      title: "Everest Base Camp",
      Duration: "8 days",
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 169,
      avg_star_count: 5
    },
    {
      title: "Everest Base Camp",
      Duration: "18 days",
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 11,
      avg_star_count: 5
    },
    {
      title: "Mardi Himal Trek",
      Duration: "9 days",
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 16,
      avg_star_count: 5
    },
    {
      title: "Everest Base Camp",
      Duration: "8 days",
      original_price_US: 1100,
      discounted_price_US: 1000,
      review_count: 169,
      avg_star_count: 5
    }
  ]
  return (
    <div className="bg-[#F0FBFA] py-16">

      <h2 className="text-2xl text-center font-semibold pb-12">Our Best Selling Packages</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-11">
        {popularList.map((destination) => {
          return <div key={destination.title} className=" shadow-[0_3px_10px_rgb(0,0,0,0.4)]">

            <div className="relative">
              <img
                src="/mountain.jpeg"
              />
              <span className="absolute top-5 font-semibold bg-green-400 py-2 px-4 text-white"> {destination.Duration} </span>
            </div>
            <div className="bg-white px-4 pb-4 pt-2 text-sm">
              <h5 className="font-semibold text-base pb-5"> {destination.title} </h5>
              <div className="flex flex-row">
                <div className="pb-5">
                  <h6 className="font-medium pb-1.5">Starting From</h6>
                  <h5><span className="text-[#B3510A] font-semibold">US ${destination.original_price_US}</span> <span className="line-through decoration-slate-400">US ${destination.discounted_price_US}  </span></h5>
                </div>
                <div className="pl-4">
                  <div className="flex text-yellow-500 pb-2 text-lg">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>Based on {destination.review_count} Reviews </p>

                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button className="px-9 text-[#B3510A]" variant={"ghost"}>
                  Read More <BsArrowRight className="ml-2" />
                </Button>
              </div>

            </div>
          </div>

        })}
      </div>
    </div >
  )
}