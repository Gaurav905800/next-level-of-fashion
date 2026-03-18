import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import LoginModal from "./pages/auth/LoginModal";
import WolfLoader from "./components/WolfLoader";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds (adjust time as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <WolfLoader />;
  }

  return (
    <BrowserRouter>
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <AppRoutes />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </BrowserRouter>
  );
};

export default App;
