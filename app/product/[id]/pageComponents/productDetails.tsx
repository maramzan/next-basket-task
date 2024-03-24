import { ProductData } from "@/constants/types";
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { availableColors } from "@/constants";
import Image from "next/image";
import { addItem as addWishlistItem } from "@/store/slices/wishlistSlice";
import { addItem as addCartItem } from "@/store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const iconButtonStyles = {
  ml: 2,
  border: "1px solid #E8E8E8",
  backgroundColor: "white",
};

const IconButtonWithStyle = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <IconButton onClick={onClick} sx={iconButtonStyles}>
    {children}
  </IconButton>
);

const ProductDetails = ({ product }: { product: ProductData }) => {
  const [showToast, setShowToast] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  const addToFavorites = (product: ProductData) => {
    dispatch(addWishlistItem(product));
    setShowToast(true);
    setMessage("Item added to wishlist");
  };

  const addToCart = (product: ProductData) => {
    const exists = cartItems.find(
      (item: ProductData) => item.id === product.id
    );
    if (exists) {
      setShowToast(true);
      setMessage("Product already in cart");
    } else {
      dispatch(addCartItem(product));
      setShowToast(true);
      setMessage("Item added to cart");
    }
  };

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <Box pb={10}>
        <Grid container>
          <Grid xs={12} md={6} item>
            <Carousel
              autoPlay={false}
              indicators={false}
              navButtonsAlwaysVisible
            >
              {product?.images.map((image, i) => (
                <Item key={i} item={image} />
              ))}
            </Carousel>
            <Box display="flex" mt={2}>
              {product?.images.map((image, index) => (
                <Box key={index}>
                  <Image
                    style={{ marginLeft: "10px" }}
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
              {product?.title}
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Rating value={product?.rating} readOnly sx={{ mr: 1 }} />
              <Typography
                fontWeight="bold"
                variant="body2"
                color="text.secondary"
              >
                10 Reviews
              </Typography>
            </Box>
            <Typography variant="h5" color="text" fontWeight="bold" mt={2}>
              $
              {(
                product?.price -
                product?.price * (product?.discountPercentage / 100)
              )?.toLocaleString("en-US")}
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
              <IconButtonWithStyle onClick={() => addToFavorites(product)}>
                <FavoriteBorderIcon />
              </IconButtonWithStyle>
              <IconButtonWithStyle>
                <AddShoppingCartOutlinedIcon
                  onClick={() => addToCart(product)}
                />
              </IconButtonWithStyle>
              <IconButtonWithStyle>
                <VisibilityIcon />
              </IconButtonWithStyle>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showToast}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
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
        backgroundPosition: "contain",
      }}
    ></Box>
  );
}
