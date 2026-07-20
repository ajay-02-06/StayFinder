import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

const ADMIN_EMAIL = "owner@gmail.com"; // Replace with your admin email

function AdminRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  if (user === undefined) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.email !== ADMIN_EMAIL) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AdminRoute;