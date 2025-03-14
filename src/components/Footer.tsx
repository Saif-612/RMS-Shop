
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-1">
            <h3 className="text-xl font-light mb-4">The Momiinah</h3>
            <p className="text-muted-foreground mb-4">
              Elegant abayas for the modern woman, crafted with care and attention to detail.
            </p>
          </div>
          
          {/* Shop column */}
          <div className="col-span-1">
            <h4 className="font-medium mb-4 uppercase text-sm tracking-wider">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-black transition-colors">All Products</Link></li>
              <li><Link to="/products?category=Abayas" className="text-muted-foreground hover:text-black transition-colors">Abayas</Link></li>
              <li><Link to="/products?category=Jilbabs" className="text-muted-foreground hover:text-black transition-colors">Jilbabs</Link></li>
              <li><Link to="/products?category=Accessories" className="text-muted-foreground hover:text-black transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          {/* Information column */}
          <div className="col-span-1">
            <h4 className="font-medium mb-4 uppercase text-sm tracking-wider">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/sustainability" className="text-muted-foreground hover:text-black transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-black transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Newsletter column */}
          <div className="col-span-1">
            <h4 className="font-medium mb-4 uppercase text-sm tracking-wider">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black rounded-none"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors rounded-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} The Momiinah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
