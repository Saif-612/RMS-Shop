
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container-custom py-16">
        <h1>Product Not Found</h1>
        <p>Sorry, the product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
