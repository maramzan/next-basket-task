"use client";
import FeaturedProductsText from "@/app/commonComponents/featuredProductsText";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";

const ProductsSection = () => {
  const [products, setProducts] = useState<object[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const limit = 10;
      const skip = (page - 1) * limit;
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      console.log("response =>", response);
      const newProducts = response?.data?.products;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(response.data.total > skip + limit);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("products length", products.length);

  const fetchMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getProducts();
  }, [page]);

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
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </>
        )}

        {/* {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))} */}
        {/* {true && <CircularProgress />} */}
        {/* {hasMore && products?.length ? (
          <Button sx={{ mt: 5 }} onClick={fetchMoreProducts} variant="outlined">
            Load More Products
          </Button>
        ) : (
          <Typography
            variant="h6"
            fontWeight="regular"
            color="text.secondary"
            mt={5}
          >
            No products to load...
          </Typography>
        )} */}
      </Box>
    </Box>
  );
};

export default ProductsSection;
