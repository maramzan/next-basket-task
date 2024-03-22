import { colors } from "@/utils/colors";
import { CardData } from "@/constants/types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";

const BestSellerCard = (props: { product: CardData }) => {
  const { product } = props;
  return (
    <Card
      sx={{
        width: "238px",
        cursor: "pointer",
        mt: 2,
      }}
      elevation={0}
      key={product?.id}
    >
      <CardMedia
        sx={{ height: "280px" }}
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

export default BestSellerCard;
