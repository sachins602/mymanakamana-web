import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AdminRoute } from './components/PrivateRoutes/PrivateRotues';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { UserSignIn } from './pages/UserSignIn';
import { AdminSignIn } from './pages/AdminSignIn';
import { Activities } from './pages/Activities';
import { AboutUs } from './pages/AboutUs';
import { Blogs } from './pages/Blogs';
import { OurPackages } from './pages/OurPackages';
import { AdminAddCategory } from './pages/AdminCategory/AdminAddCategory';
import { AdminSideBar } from './components/AdminSideBar';
import AdminViewCategory from './pages/AdminCategory/AdminViewCategory';
import { AdminAddTrekking } from './pages/AdminTrekking/AdminAddTrekking';
import AdminViewTrekking from './pages/AdminTrekking/AdminViewTrekking';
import AdminBlogView from './pages/AdminBlog/AdminBlogView';
import { AdminBlogAdd } from './pages/AdminBlog/AdminBlogAdd';

function App() {
  const { pathname } = useLocation();
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <AuthProvider>
        {pathname.slice(0, 6) === '/admin' ? null : <Navbar />}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/packages' element={<OurPackages />} />

          <Route path='/login' element={<UserSignIn />} />

          <Route path='/error' element={<h1>error</h1>} />
        </Routes>
        {pathname.slice(0, 6) === '/admin' ? null : <Footer />}
        {pathname.slice(0, 6) === '/admin' && pathname !== '/admin-login' ? (
          <AdminSideBar />
        ) : null}
        <div className='flex-1 ml-64'>
          <Routes>
            <Route path='/admin' element={<AdminRoute />}>
              <Route path='/admin' element={<AdminDashboard />} />
              <Route
                path='/admin/category/add'
                element={<AdminAddCategory />}
              />
              <Route
                path='/admin/category/view'
                element={<AdminViewCategory />}
              />
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
            </Route>
            <Route path='/admin-login' element={<AdminSignIn />} />
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
