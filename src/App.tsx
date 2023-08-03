import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminRoute, PrivateRoute } from "./components/PrivateRoutes/PrivateRotues";
import { Dashboard } from "./components/Dashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test" element={<PrivateRoute><h1>test</h1></PrivateRoute>} />

            <Route path="/error" element={<h1>error</h1>} />
          </Routes>
          <Footer />
          <Routes>
            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
