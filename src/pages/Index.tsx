import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    console.log("Index component mounted");
  }, []);

  return (
    <div className="page-transition" style={{ border: "2px solid red" }}>
      <div className="p-4 bg-destructive text-destructive-foreground">
        Debug message: If you can see this, the Index component is rendering
      </div>
      
      <Hero />
      
      <FeaturedProducts />
      
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="text-center mb-16 animate-slide-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="T-Shirts"
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800"
              href="/products?category=T-Shirts"
              index={0}
            />
            
            <CategoryCard 
              title="Jeans"
              image="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800"
              href="/products?category=Jeans"
              index={1}
            />
            
            <CategoryCard 
              title="Sweaters"
              image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800"
              href="/products?category=Sweaters"
              index={2}
            />
            
            <CategoryCard 
              title="Accessories"
              image="https://images.unsplash.com/photo-1606076165932-a8ec9315443b?auto=format&fit=crop&w=800"
              href="/products?category=Accessories"
              index={3}
            />
          </div>
        </div>
      </section>
      
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800" 
                alt="Sustainable fashion" 
                className="w-full h-96 object-cover object-center rounded-xl"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <span className="inline-block py-1 px-3 mb-6 text-xs font-medium tracking-wider uppercase border border-border rounded-full">
                Our Commitment
              </span>
              <h2 className="mb-6">Designed with Purpose, Made to Last</h2>
              <p className="text-muted-foreground mb-6">
                We're committed to creating timeless clothing that's both beautiful and sustainable. 
                From responsible sourcing to ethical manufacturing, we consider the impact of every 
                piece we create and strive to make choices that are better for our planet.
              </p>
              <Link 
                to="/sustainability" 
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                Learn About Our Sustainability Practices
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-secondary">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="mb-6">Stay Connected</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on new collections, exclusive offers, and styling inspiration.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <button 
              type="submit" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, image, href, index }: CategoryCardProps) => {
  const animationDelay = `${0.2 + index * 0.1}s`;
  
  return (
    <Link 
      to={href}
      className="group relative h-80 rounded-xl overflow-hidden animate-fade-in opacity-0"
      style={{ animationDelay, animationFillMode: "forwards" }}
    >
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-center text-sm font-medium">
          <span>Shop Now</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  index: number;
}

export default Index;
