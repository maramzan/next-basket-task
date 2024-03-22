import { colors } from "@/utils/colors";
import { CardData } from "@/constants/types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const ProductCard = (props: { product: CardData }) => {
  const { product } = props;
  return (
    <Card
      sx={{
        width: { xs: "295px", sm: "183px" },
        cursor: "pointer",
        mt: 2,
      }}
      elevation={0}
      key={product?.id}
    >
      <Link href={`/product/${product?.id}`} key={product.id}>
        <CardMedia
          sx={{ height: { xs: "360px", sm: "238px" } }}
          image={product?.thumbnail}
          title={product?.title}
        />
      </Link>
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
