import { ProductData } from "@/constants/types";
import { Box, Button, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const ProductDetails = ({ product }: { product: ProductData }) => {
  console.log("single product:", product);
  return (
    <Box>
      <Grid container>
        <Grid xs={12} md={6} item>
          <Carousel indicators={false} navButtonsAlwaysVisible>
            {product.images.map((image, i) => (
              <Item key={i} item={image} />
            ))}
            {/* {product?.images((image, i) => (
              <Item key={i} item={image} />
            ))} */}
          </Carousel>
        </Grid>
        <Grid xs={12} md={6} item>
          <Typography>{product.title}</Typography>
          <Box display="flex">
            <Rating value={product.rating} readOnly />
            <Typography>10 Reviews</Typography>
          </Box>
          <Typography>${product.price}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;

function Item({ item }: { item: string }) {
  return (
    <Box
      sx={{
        height: "500px",
        backgroundColor: "gray",
        backgroundImage: `url(${item})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
