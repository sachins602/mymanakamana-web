import { Separator } from '@/components/ui/separator';

export function AboutUs() {
  return (
    <div className='flex flex-row'>
      <div>
        <h1>About Us</h1>
        <Separator />
        <h3>Mai Manakamana Trek</h3>{' '}
        <h6>
          Mai Manakamana Trek is a leading trekking and tour company in Nepal.
          We are a team of experienced and dedicated professionals who have been
          working in the tourism industry for more than a decade. We are
          specialized in trekking, tours, and adventure activities in Nepal,
          Tibet, and Bhutan. We are committed to providing the best services to
          our clients. We are a government-registered company and a member of
          the Trekking Agencies Association of Nepal (TAAN), Nepal
          Mountaineering Association (NMA), and Nepal Tourism Board (NTB). We
          are also affiliated with the Nepal Rastra Bank (NRB), the central bank
          of Nepal. We are authorized to conduct foreign exchange
          transactions.We are also a member of the Himalayan Rescue Association
          (HRA).
        </h6>
        <h5>maimanakamana@gmail.com</h5>
        <h5>+977 9851234567</h5>
        <h5>Kathmandu, Nepal</h5>
      </div>

      <img
        className='object-cover w-96 h-96'
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
      />
    </div>
  );
}
