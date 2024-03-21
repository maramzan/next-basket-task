import { colors } from "@/utils/colors";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface CardData {
  id?: number;
  title?: string;
  description?: string;
  price: number;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card
      sx={{ width: { xs: "295px", sm: "183px" }, mt: 2 }}
      elevation={0}
      key={product?.id}
    >
      <CardMedia
        sx={{ height: { xs: "360px", sm: "238px" } }}
        image={product?.thumbnail}
        title={product?.title}
      />
      <CardContent>
        <Typography variant="body1" fontWeight="bold" textAlign="center">
          {product?.title}
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          color={colors.textLight}
          mt={1}
          textAlign="center"
        >
          {product?.brand}
        </Typography>
        <Typography
          component="div"
          variant="body1"
          fontWeight="bold"
          mt={1}
          textAlign="center"
        >
          <Box
            component="span"
            sx={{ color: colors.textLightGray }}
          >{`$${product?.price} `}</Box>
          <Box component="span" sx={{ color: colors.green }}>
            {` $${(
              product?.price -
              (product?.price * product?.discountPercentage) / 100
            ).toFixed(2)}`}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
