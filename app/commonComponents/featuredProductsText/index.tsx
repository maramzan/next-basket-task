import { colors } from "@/utils/colors";
import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturedProductsText = () => {
  return (
    <Box sx={classes.textContainer}>
      <Typography variant="h6" sx={classes.featText}>
        Featured Products
      </Typography>
      <Typography variant="h5" fontWeight="bold" sx={classes.serviceText}>
        THE BEST SERVICES{" "}
      </Typography>
      <Typography variant="body1" sx={classes.problemText}>
        Problems trying to resolve the conflict between{" "}
      </Typography>
    </Box>
  );
};

export default FeaturedProductsText;

const classes = {
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  featText: {
    color: colors.textLight,
  },
  serviceText: {
    color: colors.textPrimary,
  },
  problemText: {
    color: colors.textLight,
  },
};
