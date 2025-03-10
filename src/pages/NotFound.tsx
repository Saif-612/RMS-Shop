
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container-custom py-16 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button 
        onClick={() => navigate("/")}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft size={18} />
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;
