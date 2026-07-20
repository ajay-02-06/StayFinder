import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PGDetails from "./pages/PGDetails";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import Analytics from "./pages/Analytics";
import AdminProfile from "./pages/AdminProfile";
import BecomeHost from "./pages/BecomeHost";
import AdminRequests from "./pages/AdminRequests";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      
      {/* New Route */}
      <Route path="/pg/:id" element={<PGDetails />} />
     <Route
  path="/wishlist"
  element={
    <ProtectedRoute>
      <Wishlist />
    </ProtectedRoute>
  }
/>
   <Route
  path="/admin/dashboard"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>
<Route
  path="/admin/analytics"
  element={<Analytics />}
/>
<Route
  path="/admin/profile"
  element={<AdminProfile />}
/>
<Route path="/become-host" element={<BecomeHost />} />
<Route
  path="/admin/requests"
  element={<AdminRequests />}
/>
    </Routes>
  );
}

export default App;