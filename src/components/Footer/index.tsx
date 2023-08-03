
import bg from 'public/footerbg.png'
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai'
const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',

}
export function Footer() {

  return (
    <footer className="w-full p-4  border-t shadow md:flex md:items-center md:justify-between md:p-6 text-white" style={style}>


      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 md:gap-20" >
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-xs py-4">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          </p>

          {/* phone number */}
          <h3 className="flex flex-col py-6">
            <span className="text-base font-bold">Phone number</span>
            <p className="text-xs">
              <a href="tel:+4733378901">+47-333-78-901,  </a>
              <a href="tel:+4733378901">  +981203822</a>
            </p>
          </h3>

          {/* Email */}
          <h3 className="flex flex-col">
            <span className="text-base font-bold">Email</span>
            <p className="text-xs">
              <a href="mailto: maimanakamana@gmail.com">maimanakamana@gmail.com</a>
            </p>
          </h3>

        </div>
        {/* end of first contactus columb */}


        {/* Start of top destination */}
        <div className="lg:pl-10">
          <div>
            <h2 className="text-xl font-bold pb-4">Top Destination</h2>
            <ul className="text-xs">
              <li>
                <a href="/">Annapurna Base Camp</a>
              </li>
              <li className="py-2">
                <a href="/">Everest Base Camp</a>
              </li>
              <li>
                <a href="/">Tilicho Trek</a>
              </li>
            </ul>
          </div>

          {/* Start of special offer */}
          <div className="pt-8">
            <h2 className="text-xl font-bold pb-4">Special Offer</h2>
            <ul className="text-xs">
              <li>
                <a href="/">Annapurna Base Camp</a>
              </li>
              <li className="py-2">
                <a href="/">Everest Base Camp</a>
              </li>
              <li>
                <a href="/">Tilicho Trek</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Start of Quick as */}
        <div>
          <h2 className="text-xl font-bold pb-4">Quick as</h2>
          <ul className="text-xs">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="py-2">
              <a href="/" >Activities</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li className="py-2">
              <a href="/" >About Us</a>
            </li>
            <li>
              <a href="/">Contact US</a>
            </li>
          </ul>
        </div>


        {/* Start of More Info */}
        <div>
          <h2 className="text-xl font-bold">Follow us</h2>
          <ul className="flex text-2xl">
            <li className="hover:text-gray-300">
              <a href="/"> <AiFillFacebook /> </a>
            </li>
            <li className="hover:text-gray-300">
              <a href="/">  <AiFillInstagram /> </a>
            </li>
            <li className="hover:text-gray-300">
              <a href="/"> <AiFillTwitterSquare /> </a>
            </li>
          </ul>
        </div>
      </div>


    </footer>

  )
}