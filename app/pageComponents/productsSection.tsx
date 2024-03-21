"use client";
import FeaturedProductsText from "@/app/commonComponents/featuredProductsText";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";

const ProductsSection = () => {
  const [products, setProducts] = useState<object[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=10`
      );
      const newProducts = response?.data?.products;

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);

      if (newProducts.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log("state =>", products);
  return (
    <Box sx={{ padding: 4, mt: 10 }}>
      <FeaturedProductsText />
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        {hasMore && (
          <Button sx={{ mt: 5 }} variant="outlined">
            Load More Products
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductsSection;
