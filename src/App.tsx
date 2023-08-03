import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import {
  AdminRoute,
  PrivateRoute,
} from './components/PrivateRoutes/PrivateRotues';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { UserSignIn } from './pages/UserSignIn';
import { AdminSignIn } from './pages/AdmnSignIn';

function App() {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route
              path='/test'
              element={
                <PrivateRoute>
                  <h1>test</h1>
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<UserSignIn />} />

            <Route path='/error' element={<h1>error</h1>} />
          </Routes>
          <Footer />
          <Routes>
            <Route
              path='/admin'
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route path='/admin-login' element={<AdminSignIn />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
