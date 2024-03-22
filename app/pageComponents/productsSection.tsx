"use client";
import FeaturedProductsText from "@/app/commonComponents/featuredProductsText";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";
import { CardData } from "@/constants/types";

const ProductsSection = () => {
  const [products, setProducts] = useState<CardData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getMoreProducts = async () => {
    try {
      setLoading(true);
      const limit = 10;
      const skip = (page - 1) * limit;
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail,brand,discountPercentage`
      );
      const newProducts = response?.data?.products;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(response.data.total > skip + limit);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getMoreProducts();
  }, [page]);

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
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        {products?.length && hasMore ? (
          <Button
            disabled={loading}
            sx={{ mt: 5 }}
            onClick={fetchMoreProducts}
            variant="outlined"
          >
            Load More Products
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

export default ProductsSection;

// async function getProjects() {
//   const res = await fetch(`https://...`,{ cache: 'no-store' })
//   const projects = await res.json()

//   return projects
// }

// export async function getStaticProps() {
//   try {
//    const res = await axios.get(
//       `https://dummyjson.com/products?limit=10&skip=0`
//     );
//     console.log("res", res);
//     if (res.status !== 200) {
//       throw new Error("Failed to fetch initial products");
//     }
//     const initialProducts = res?.data?.products;

//     return {
//       props: {
//         initialProducts,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching initial products:", error);
//     return {
//       props: {
//         initialProducts: [],
//       },
//     };
//   }
// }
