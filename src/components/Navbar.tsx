
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const location = useLocation();

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItemCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-display font-medium tracking-tight transition-opacity duration-200 hover:opacity-80"
        >
          Rmس Abayas
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              location.pathname === "/" 
                ? "text-primary" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              location.pathname.includes("/products") 
                ? "text-primary" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              location.pathname === "/about" 
                ? "text-primary" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search button */}
          <button 
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          {/* Account button */}
          <Link 
            to="/account" 
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          
          {/* Cart button */}
          <Link 
            to="/cart" 
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center animate-fade-in">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white animate-fade-in">
          <div className="pt-20 px-6 pb-6 h-full overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="text-xl font-medium py-2 border-b border-muted"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-xl font-medium py-2 border-b border-muted"
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-xl font-medium py-2 border-b border-muted"
              >
                About
              </Link>
              <Link 
                to="/account" 
                className="text-xl font-medium py-2 border-b border-muted"
              >
                Account
              </Link>
              <Link 
                to="/cart" 
                className="text-xl font-medium py-2 border-b border-muted"
              >
                Cart ({cartItemCount})
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
