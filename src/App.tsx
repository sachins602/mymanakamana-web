import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminRoute, PrivateRoute } from "./components/PrivateRoutes/PrivateRotues";


function App() {
  return (
    <div className="bg-red-500">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<h1>This is home</h1>} />
            <Route path="/test" element={<PrivateRoute><h1>test</h1></PrivateRoute>} />
            <Route path="/admin" element={<AdminRoute><h1>admin</h1></AdminRoute>} />
            <Route path="/error" element={<h1>error</h1>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
