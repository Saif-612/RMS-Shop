
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Filter, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, allSizes, allColors, priceRanges } from "@/lib/data";
import { cn } from "@/lib/utils";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    priceRange: "",
    search: "",
  });
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  
  // Initialize filters from URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category") || "";
    
    setFilters(prev => ({
      ...prev,
      category,
    }));
  }, [location.search]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Size filter
    if (filters.size) {
      result = result.filter(product => product.sizes.includes(filters.size));
    }
    
    // Color filter
    if (filters.color) {
      result = result.filter(product => product.colors.includes(filters.color));
    }
    
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      result = result.filter(product => 
        product.price >= min && (max === Infinity || product.price <= max)
      );
    }
    
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply sorting
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(result);
  }, [filters, sortOption]);
  
  // Update URL when category filter changes
  useEffect(() => {
    const searchParams = new URLSearchParams();
    
    if (filters.category) {
      searchParams.set("category", filters.category);
    }
    
    const newSearch = searchParams.toString();
    const currentSearch = location.search.replace(/^\?/, "");
    
    if (newSearch !== currentSearch) {
      navigate({
        pathname: location.pathname,
        search: newSearch ? `?${newSearch}` : "",
      }, { replace: true });
    }
  }, [filters.category, location.pathname, navigate]);
  
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof prev] === value ? "" : value,
    }));
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: "",
      size: "",
      color: "",
      priceRange: "",
      search: "",
    });
    setSortOption("default");
  };
  
  return (
    <div className="py-12 page-transition">
      <div className="container-custom">
        <h1 className="text-3xl font-medium mb-8">Shop All Products</h1>
        
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Search input */}
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full md:w-80 px-4 py-2 pr-10 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              />
              {filters.search && (
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  onClick={() => setFilters(prev => ({ ...prev, search: "" }))}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Mobile filter toggle */}
            <button 
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <Filter size={18} />
              Filters
              {Object.values(filters).some(Boolean) && (
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                  {Object.values(filters).filter(Boolean).length}
                </span>
              )}
            </button>
            
            {/* Sort dropdown */}
            <select 
              className="w-full sm:w-48 px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {/* Active filters */}
        {Object.values(filters).some(Boolean) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground mr-2">Active filters:</span>
            {filters.category && (
              <FilterPill 
                label={`Category: ${filters.category}`}
                onRemove={() => handleFilterChange("category", filters.category)}
              />
            )}
            {filters.size && (
              <FilterPill 
                label={`Size: ${filters.size}`}
                onRemove={() => handleFilterChange("size", filters.size)}
              />
            )}
            {filters.color && (
              <FilterPill 
                label={`Color: ${filters.color}`}
                onRemove={() => handleFilterChange("color", filters.color)}
              />
            )}
            {filters.priceRange && (
              <FilterPill 
                label={`Price: ${getPriceRangeLabel(filters.priceRange)}`}
                onRemove={() => handleFilterChange("priceRange", filters.priceRange)}
              />
            )}
            <button 
              className="text-sm text-primary hover:underline"
              onClick={clearFilters}
            >
              Clear all
            </button>
          </div>
        )}
        
        {/* Products and filters layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters (desktop) */}
          <div className="hidden md:block w-64 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    label={category}
                    active={filters.category === category}
                    onClick={() => handleFilterChange("category", category)}
                  />
                ))}
              </div>
            </div>
            
            {/* Sizes */}
            <div>
              <h3 className="font-medium mb-3">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleFilterChange("size", size)}
                    className={cn(
                      "w-10 h-10 rounded-md border transition-all flex items-center justify-center text-sm",
                      filters.size === size
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Colors */}
            <div>
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {allColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleFilterChange("color", color)}
                    className={cn(
                      "w-8 h-8 rounded-full transition-all flex items-center justify-center",
                      filters.color === color
                        ? "ring-2 ring-primary ring-offset-2"
                        : "border border-border hover:border-muted-foreground"
                    )}
                    style={{ 
                      backgroundColor: color.toLowerCase(),
                      borderColor: color.toLowerCase() === "white" ? "#e5e7eb" : "transparent"
                    }}
                    title={color}
                  >
                    {filters.color === color && (
                      <Check size={14} className={color.toLowerCase() === "white" ? "text-black" : "text-white"} />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price ranges */}
            <div>
              <h3 className="font-medium mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <FilterButton
                    key={`${range.min}-${range.max}`}
                    label={range.label}
                    active={filters.priceRange === `${range.min}-${range.max}`}
                    onClick={() => handleFilterChange("priceRange", `${range.min}-${range.max}`)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile filters */}
          {isMobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-white animate-fade-in">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-medium">Filters</h2>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 h-[calc(100vh-60px)] overflow-y-auto">
                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <FilterButton
                          key={category}
                          label={category}
                          active={filters.category === category}
                          onClick={() => handleFilterChange("category", category)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Sizes */}
                  <div>
                    <h3 className="font-medium mb-3">Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleFilterChange("size", size)}
                          className={cn(
                            "w-10 h-10 rounded-md border transition-all flex items-center justify-center text-sm",
                            filters.size === size
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-muted-foreground"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div>
                    <h3 className="font-medium mb-3">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {allColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleFilterChange("color", color)}
                          className={cn(
                            "w-8 h-8 rounded-full transition-all flex items-center justify-center",
                            filters.color === color
                              ? "ring-2 ring-primary ring-offset-2"
                              : "border border-border hover:border-muted-foreground"
                          )}
                          style={{ 
                            backgroundColor: color.toLowerCase(),
                            borderColor: color.toLowerCase() === "white" ? "#e5e7eb" : "transparent"
                          }}
                          title={color}
                        >
                          {filters.color === color && (
                            <Check size={14} className={color.toLowerCase() === "white" ? "text-black" : "text-white"} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price ranges */}
                  <div>
                    <h3 className="font-medium mb-3">Price</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <FilterButton
                          key={`${range.min}-${range.max}`}
                          label={range.label}
                          active={filters.priceRange === `${range.min}-${range.max}`}
                          onClick={() => handleFilterChange("priceRange", `${range.min}-${range.max}`)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="pt-4 border-t space-y-3">
                    <button 
                      className="w-full py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                      onClick={() => setIsMobileFiltersOpen(false)}
                    >
                      Apply Filters
                    </button>
                    <button 
                      className="w-full py-3 rounded-md border border-border hover:bg-secondary transition-colors"
                      onClick={() => {
                        clearFilters();
                        setIsMobileFiltersOpen(false);
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search term.
                </p>
                <button 
                  className="inline-flex items-center justify-center py-2 px-4 rounded-md border border-border hover:bg-secondary transition-colors"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, active, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full text-left px-3 py-2 rounded-md transition-colors text-sm",
      active
        ? "bg-primary/10 text-primary"
        : "hover:bg-secondary"
    )}
  >
    {label}
  </button>
);

interface FilterPillProps {
  label: string;
  onRemove: () => void;
}

const FilterPill = ({ label, onRemove }: FilterPillProps) => (
  <div className="flex items-center bg-secondary rounded-full py-1 pl-3 pr-1 text-sm">
    <span>{label}</span>
    <button
      onClick={onRemove}
      className="ml-1 p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
      aria-label={`Remove ${label} filter`}
    >
      <X size={14} />
    </button>
  </div>
);

// Helper function for displaying price range label
const getPriceRangeLabel = (priceRange: string) => {
  const [min, max] = priceRange.split("-").map(Number);
  
  if (max === Infinity) {
    return `Over $${min}`;
  }
  
  return `$${min} to $${max}`;
};

// Check component for color filters
const Check = ({ size, className }: { size: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Products;
