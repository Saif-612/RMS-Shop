
import React from "react";
import { ArrowRight, Leaf, Recycle, Factory, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Sustainability = () => {
  return (
    <div className="page-transition py-16 md:py-24">
      <div className="container-custom">
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium tracking-wider uppercase border border-border rounded-full">
            Our Commitment
          </span>
          <h1 className="mb-6">Sustainability at the Core</h1>
          <p className="text-lg text-muted-foreground">
            We believe that fashion can be both beautiful and responsible. Our commitment to sustainability guides every decision we make.
          </p>
        </div>
        
        {/* Hero image */}
        <div className="relative rounded-xl overflow-hidden mb-24 h-[400px] md:h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=1600" 
            alt="Sustainable fashion" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h2 className="mb-4">Designed with Purpose, Made to Last</h2>
              <p className="text-white/80">
                Our approach to sustainability goes beyond using eco-friendly materials. 
                It's about creating timeless pieces that transcend seasons and trends.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our approach section */}
        <div className="mb-24">
          <h2 className="text-center mb-16">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-xl">
              <div className="mb-6">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Sustainable Materials</h3>
              <p className="text-muted-foreground mb-6">
                We prioritize organic, recycled, and responsibly sourced materials that minimize environmental impact while maximizing quality and durability.
              </p>
              <ul className="space-y-2">
                <SustainabilityListItem text="Organic cotton grown without pesticides" />
                <SustainabilityListItem text="Recycled polyester from plastic bottles" />
                <SustainabilityListItem text="TENCEL™ from sustainable wood sources" />
              </ul>
            </div>
            
            <div className="bg-secondary p-8 rounded-xl">
              <div className="mb-6">
                <Factory className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Ethical Production</h3>
              <p className="text-muted-foreground mb-6">
                We partner with factories that provide safe working conditions, fair wages, and respect for human rights and dignity.
              </p>
              <ul className="space-y-2">
                <SustainabilityListItem text="Fair labor practices and living wages" />
                <SustainabilityListItem text="Safe and healthy work environments" />
                <SustainabilityListItem text="Transparent supply chain" />
              </ul>
            </div>
            
            <div className="bg-secondary p-8 rounded-xl">
              <div className="mb-6">
                <Recycle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Circular Design</h3>
              <p className="text-muted-foreground mb-6">
                We design products with their entire lifecycle in mind, from creation to eventual recycling or biodegradation.
              </p>
              <ul className="space-y-2">
                <SustainabilityListItem text="Minimizing waste in production" />
                <SustainabilityListItem text="Designing for longevity and durability" />
                <SustainabilityListItem text="Recyclable and biodegradable materials" />
              </ul>
            </div>
          </div>
        </div>
        
        {/* Progress report */}
        <div className="mb-24">
          <div className="bg-background border border-border rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-8">Our Progress</h2>
              
              <div className="space-y-8">
                <ProgressItem 
                  title="Reduced Carbon Footprint" 
                  description="We've reduced our carbon emissions by 30% since 2020 through more efficient manufacturing processes and renewable energy use."
                  progress={30}
                />
                
                <ProgressItem 
                  title="Sustainable Materials" 
                  description="Currently, 65% of our materials are sustainably sourced. We aim to reach 85% by 2025."
                  progress={65}
                />
                
                <ProgressItem 
                  title="Water Conservation" 
                  description="Our water-saving initiatives have reduced water usage by 40% in our production processes compared to industry standards."
                  progress={40}
                />
                
                <ProgressItem 
                  title="Zero Waste" 
                  description="We're 45% of the way to our goal of zero waste in our operations by 2030."
                  progress={45}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-24">
          <h2 className="text-center mb-16">Our Certifications</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://placehold.co/40x40/png" 
                  alt="GOTS Certified" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">GOTS Certified</h3>
              <p className="text-muted-foreground">
                Global Organic Textile Standard certification for organic materials.
              </p>
            </div>
            
            <div className="border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://placehold.co/40x40/png" 
                  alt="Fair Trade Certified" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Fair Trade Certified</h3>
              <p className="text-muted-foreground">
                Ensuring fair prices, community development, and safe working conditions.
              </p>
            </div>
            
            <div className="border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://placehold.co/40x40/png" 
                  alt="B Corp Certified" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">B Corp Certified</h3>
              <p className="text-muted-foreground">
                Meeting the highest standards of social and environmental performance.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center">
          <h2 className="mb-6">Join Us in Making a Difference</h2>
          <p className="max-w-2xl mx-auto mb-8">
            When you choose our products, you're not just investing in quality clothing, but also in a more sustainable future for fashion.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center py-3 px-8 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors"
          >
            Shop Sustainable Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SustainabilityListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <span className="mr-2 mt-1 text-primary">
        <Check size={16} />
      </span>
      <span>{text}</span>
    </li>
  );
};

interface ProgressItemProps {
  title: string;
  description: string;
  progress: number;
}

const ProgressItem = ({ title, description, progress }: ProgressItemProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <p className="text-muted-foreground mb-3">{description}</p>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Sustainability;
