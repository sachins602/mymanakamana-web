import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import {
  AdminRoute,
  PrivateRoute,
} from './components/PrivateRoutes/PrivateRotues';
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

import { UserRegister } from './pages/UserRegister';
import { AdminBooking } from './pages/admin/AdminBooking';
import { BlogDetail } from './pages/user/BlogDetail';

function App() {
  const { pathname } = useLocation();

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <AuthProvider>
        {pathname.slice(0, 6) === '/admin' ||
        pathname === '/login' ||
        pathname === '/register' ? null : (
          <Navbar />
        )}
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='/activities' element={<Activities />} />
          <Route
            path='/trekking'
            element={
              <PrivateRoute>
                <Trekking />
              </PrivateRoute>
            }
          />
          <Route
            path='/long-tours'
            element={
              <PrivateRoute>
                <LongTours />
              </PrivateRoute>
            }
          />
          <Route
            path='/short-tours'
            element={
              <PrivateRoute>
                <ShortTours />
              </PrivateRoute>
            }
          />
          <Route
            path='/about-us'
            element={
              <PrivateRoute>
                <AboutUs />
              </PrivateRoute>
            }
          />
          <Route
            path='/blogs'
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            }
          />
          <Route
            path='/blogDetail'
            element={
              <PrivateRoute>
                <BlogDetail />
              </PrivateRoute>
            }
          />
          <Route
            path='/packages'
            element={
              <PrivateRoute>
                <OurPackages />
              </PrivateRoute>
            }
          />
          <Route
            path='/trekDetail'
            element={
              <PrivateRoute>
                <TrekDetail />
              </PrivateRoute>
            }
          />
          <Route
            path='/book'
            element={
              <PrivateRoute>
                <Book />
              </PrivateRoute>
            }
          />
          <Route
            path='/booking'
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<UserSignIn />} />
          <Route path='/register' element={<UserRegister />} />

          <Route path='/error' element={<h1>error</h1>} />
        </Routes>
        {pathname.slice(0, 6) === '/admin' ||
        pathname === '/login' ||
        pathname === '/register' ? null : (
          <Footer />
        )}
        {pathname.slice(0, 6) === '/admin' && pathname !== '/admin-login' ? (
          <AdminSideBar />
        ) : null}
        <div className='flex-1 ml-64'>
          <Routes>
            <Route
              path='/admin'
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />

            <Route
              path='/admin/trekking/add'
              element={
                <AdminRoute>
                  <AdminAddTrekking />
                </AdminRoute>
              }
            />
            <Route
              path='/admin/trekking/view'
              element={<AdminViewTrekking />}
            />
            <Route
              path='/admin/booking'
              element={
                <AdminRoute>
                  <AdminBooking />
                </AdminRoute>
              }
            />
            <Route
              path='/admin/blog/view'
              element={
                <AdminRoute>
                  <AdminBlogView />
                </AdminRoute>
              }
            />
            <Route
              path='/admin/blog/add'
              element={
                <AdminRoute>
                  <AdminBlogAdd />
                </AdminRoute>
              }
            />
            <Route
              path='/admin/profile'
              element={
                <AdminRoute>
                  <AdminProfile />
                </AdminRoute>
              }
            />

            <Route path='/admin-login' element={<AdminSignIn />} />
          </Routes>
        </div>
      </AuthProvider>
      <TailwindIndicator />
    </div>
  );
}

export default App;
