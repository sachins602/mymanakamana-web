import { useContactMutation } from '@/hooks/contact.hook';
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from 'react-icons/ai';
import { useToast } from '../ui/use-toast';

export function Footer() {
  const { toast } = useToast();
  const sendContact = useContactMutation();
  return (
    <footer className="w-full text-white p-4 border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-[url('/footerbg.png')]">
      <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 md:gap-20'>
        <div>
          <h2 className='text-xl font-bold'>Contact Us</h2>
          <p className='py-4 text-xs'>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>

          {/* phone number */}
          <h3 className='flex flex-col py-6'>
            <span className='text-base font-bold'>Phone number</span>
            <p className='text-xs'>
              <a href='tel:+4733378901'>+47-333-78-901, </a>
              <a href='tel:+4733378901'> +981203822</a>
            </p>
          </h3>

          {/* Email */}
          <h3 className='flex flex-col'>
            <span className='text-base font-bold'>Email</span>
            <p className='text-xs'>
              <a href='mailto: maimanakamana@gmail.com'>
                maimanakamana@gmail.com
              </a>
            </p>
          </h3>
        </div>
        {/* end of first contactus columb */}

        {/* Start of top destination */}
        <div className='lg:pl-10'>
          <div>
            <h2 className='pb-4 text-xl font-bold'>Top Destination</h2>
            <ul className='text-xs'>
              <li>
                <a href='/'>Annapurna Base Camp</a>
              </li>
              <li className='py-2'>
                <a href='/'>Everest Base Camp</a>
              </li>
              <li>
                <a href='/'>Tilicho Trek</a>
              </li>
            </ul>
          </div>

          {/* Start of special offer */}
          <div className='pt-8'>
            <h2 className='pb-4 text-xl font-bold'>Special Offer</h2>
            <ul className='text-xs'>
              <li>
                <a href='/'>Annapurna Base Camp</a>
              </li>
              <li className='py-2'>
                <a href='/'>Everest Base Camp</a>
              </li>
              <li>
                <a href='/'>Tilicho Trek</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Start of Quick as */}
        <div>
          <h2 className='pb-4 text-xl font-bold'>Quick as</h2>
          <ul className='text-xs'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li className='py-2'>
              <a href='/'>Activities</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li className='py-2'>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Contact US</a>
            </li>
          </ul>
        </div>

        {/* Start of More Info */}
        <div>
          <h2 className='text-xl font-bold'>Follow us</h2>
          <ul className='flex text-2xl'>
            <li className='hover:text-gray-300'>
              <a href='/'>
                {' '}
                <AiFillFacebook />{' '}
              </a>
            </li>
            <li className='hover:text-gray-300'>
              <a href='/'>
                {' '}
                <AiFillInstagram />{' '}
              </a>
            </li>
            <li className='hover:text-gray-300'>
              <a href='/'>
                {' '}
                <AiFillTwitterSquare />{' '}
              </a>
            </li>
          </ul>
          <div className='w-80'>
            <h3>Contact Us</h3>

            <form
              id='contact-form'
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSubmit={(e: any) => {
                e.preventDefault();
                const { name, email, message } = e.target;
                if (!name.value || !email.value || !message.value) return;
                sendContact.mutate(
                  {
                    _id: '',
                    name: name.value,
                    email: email.value,
                    message: message.value,
                  },
                  {
                    onSuccess: res => {
                      console.log(res);
                      toast({
                        variant: 'success',
                        title: 'Success',
                        description: 'Your have been logged out.',
                      });
                      e.target.reset();
                    },
                    onError: () => {
                      toast({
                        variant: 'destructive',
                        title: 'Error',
                        description: 'Something went wrong. Please try again!',
                      });
                      e.target.reset();
                    },
                  },
                );
              }}
              className='space-y-2'
            >
              <input
                type='text'
                id='name'
                className='block w-full p-3 text-sm bg-transparent border rounded-lg shadow-sm placeholder:text-white '
                placeholder='Name'
                required
              />
              <input
                type='email'
                id='email'
                className='shadow-sm border bg-transparent placeholder:text-white  text-sm rounded-lg block w-full p-2.5 '
                placeholder='Email'
                required
              />
              <textarea
                id='message'
                rows={5}
                className='block p-2.5 w-full text-sm bg-transparent placeholder:text-white rounded-lg shadow-sm border'
                placeholder='Message'
                defaultValue={''}
              />
              <button
                type='submit'
                className='px-5 py-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg sm:w-fit hover:bg-green-700 focus:ring-4 focus:outline-none '
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
