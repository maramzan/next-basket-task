import { bestSellerData } from "@/constants";
import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import BestSellerCard from "./bestSellerCard";

const BestSeller = () => {
  return (
    <Box sx={{ bgcolor: "#fafafa", display: { xs: "none", md: "block" } }}>
      <Container>
        <Typography pb={3} pt={5} variant="h5" fontWeight="bold">
          BESTSELLER PRODUCTS
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {bestSellerData?.map((product) => (
            <BestSellerCard key={product.id} product={product} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BestSeller;
