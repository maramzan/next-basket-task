import { ProductData } from "@/constants/types";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { availableColors } from "@/constants";
import Image from "next/image";

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
          </Carousel>
          <Box display="flex" mt={2}>
            {product.images.map((image, index) => (
              <Box key={index}>
                <Image
                  src={image}
                  width={100}
                  height={75}
                  alt="products images"
                />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid xs={12} md={6} item sx={{ pl: 4, pt: 1 }}>
          <Typography variant="h6" fontWeight="regular">
            {product.title}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Rating value={product.rating} readOnly sx={{ mr: 1 }} />
            <Typography
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
            >
              10 Reviews
            </Typography>
          </Box>
          <Typography variant="h5" color="text" fontWeight="bold" mt={2}>
            ${product.price.toLocaleString("en-US")}
          </Typography>
          <Typography mt={1} variant="body2" fontWeight="bold">
            <Box component="span" color="text.secondary">
              Availability :{" "}
            </Box>
            <Box component="span" color="primary.main">
              In Stock
            </Box>
          </Typography>
          <Divider sx={{ mt: 10 }} />
          <Box display="flex" mt={4}>
            {availableColors.map((color, i) => (
              <Box
                key={i}
                sx={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "15px",
                  backgroundColor: color,
                  margin: "0 5px",
                }}
              />
            ))}
          </Box>
          <Box mt={6}>
            <Button variant="contained" sx={{ color: "white" }}>
              Select Options
            </Button>
            <IconButton
              sx={{
                ml: 2,
                border: "1px solid #E8E8E8",
                backgroundColor: "white",
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              sx={{
                ml: 2,
                border: "1px solid #E8E8E8",
                backgroundColor: "white",
              }}
            >
              <AddShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton
              sx={{
                ml: 2,
                backgroundColor: "white",
                border: "1px solid #E8E8E8",
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </Box>
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
        height: { xs: "348px", sm: "500px" },
        backgroundColor: "gray",
        backgroundImage: `url(${item})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
