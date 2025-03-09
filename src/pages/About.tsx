
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-transition py-16 md:py-24">
      <div className="container-custom">
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium tracking-wider uppercase border border-border rounded-full">
            Our Story
          </span>
          <h1 className="mb-6">Crafting Premium Essentials Since 2010</h1>
          <p className="text-lg text-muted-foreground">
            We believe in creating timeless pieces that transcend trends and become cherished parts of your wardrobe for years to come.
          </p>
        </div>
        
        {/* Our journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800" 
              alt="Our team working" 
              className="w-full h-96 object-cover object-center rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6">Our Journey</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, our brand began with a simple mission: create clothing that combines exceptional quality with contemporary design. 
              What started as a small collection of essentials has grown into a comprehensive range of wardrobe staples, each designed with purpose and crafted to last.
            </p>
            <p className="text-muted-foreground">
              Our commitment to quality hasn't changed since day one. We continue to work with the finest materials and skilled artisans to create pieces that feel as good as they look.
            </p>
          </div>
        </div>
        
        {/* Values section */}
        <div className="py-20 bg-secondary rounded-xl mb-24">
          <div className="container-custom">
            <h2 className="text-center mb-16">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. From fabric selection to finishing details, every aspect of our products is carefully considered.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through responsible sourcing, ethical manufacturing, and thoughtful design.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We value the relationships we build with our customers, partners, and the communities where we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="mb-24">
          <h2 className="text-center mb-16">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember 
              name="Alex Morgan"
              role="Founder & Creative Director"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400"
            />
            <TeamMember 
              name="Sam Chen"
              role="Head of Design"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400"
            />
            <TeamMember 
              name="Taylor Reid"
              role="Sustainability Lead"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400"
            />
            <TeamMember 
              name="Jordan Kim"
              role="Production Manager"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400"
            />
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center">
          <h2 className="mb-6">Join Our Journey</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Discover our latest collection and experience the quality and craftsmanship that defines our brand.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center py-3 px-8 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors"
          >
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="group">
      <div className="relative mb-4 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-white/80">{role}</p>
          </div>
        </div>
      </div>
      <h4 className="font-medium">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default About;
