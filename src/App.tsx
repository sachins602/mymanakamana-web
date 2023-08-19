import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AdminRoute } from './components/PrivateRoutes/PrivateRotues';
import { Dashboard } from './pages/user/Dashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { UserSignIn } from './pages/UserSignIn';
import { AdminSignIn } from './pages/AdminSignIn';
import { AboutUs } from './pages/user/AboutUs';
import { Activities } from './pages/user/Activities';
import { Blogs } from './pages/user/Blogs';
import { OurPackages } from './pages/user/OurPackages';
import { Trekking } from './pages/user/Trekking';
import { AdminSideBar } from './components/AdminSideBar';
import { AdminBlogAdd } from './pages/admin/AdminBlog/AdminBlogAdd';
import AdminBlogView from './pages/admin/AdminBlog/AdminBlogView';
import AdminProfile from './pages/admin/AdminProfile';
import { AdminAddTrekking } from './pages/admin/AdminTrekking/AdminAddTrekking';
import AdminViewTrekking from './pages/admin/AdminTrekking/AdminViewTrekking';
import TrekDetail from './pages/user/TrekDetail';
import { LongTours } from './pages/user/LongTours';
import { ShortTours } from './pages/user/ShortTours';
import Book from './pages/user/Book';
import { Booking } from './pages/user/Booking';
import { TailwindIndicator } from './components/TailwindIndicator';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && pathname.slice(0, 6) === '/admin') {
      navigate('/admin-login');
    } else if (!user && pathname !== '/login') {
      navigate('/login');
    }
  }, [user]);

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <AuthProvider>
        {pathname.slice(0, 6) === '/admin' || pathname === '/login' ? null : (
          <Navbar />
        )}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/trekking' element={<Trekking />} />
          <Route path='/long-tours' element={<LongTours />} />
          <Route path='/short-tours' element={<ShortTours />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/packages' element={<OurPackages />} />
          <Route path='/trekDetail' element={<TrekDetail />} />
          <Route path='/book' element={<Book />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/login' element={<UserSignIn />} />

          <Route path='/error' element={<h1>error</h1>} />
        </Routes>
        {pathname.slice(0, 6) === '/admin' || pathname === '/login' ? null : (
          <Footer />
        )}
        {pathname.slice(0, 6) === '/admin' && pathname !== '/admin-login' ? (
          <AdminSideBar />
        ) : null}
        <div className='flex-1 ml-64'>
          <Routes>
            <Route path='/admin' element={<AdminRoute />}>
              <Route path='/admin' element={<AdminDashboard />} />

              <Route
                path='/admin/trekking/add'
                element={<AdminAddTrekking />}
              />
              <Route
                path='/admin/trekking/view'
                element={<AdminViewTrekking />}
              />
              <Route path='/admin/blog/view' element={<AdminBlogView />} />
              <Route path='/admin/blog/add' element={<AdminBlogAdd />} />
              <Route path='/admin/profile' element={<AdminProfile />} />
            </Route>
            <Route path='/admin-login' element={<AdminSignIn />} />
          </Routes>
        </div>
      </AuthProvider>
      <TailwindIndicator />
    </div>
  );
}

export default App;
