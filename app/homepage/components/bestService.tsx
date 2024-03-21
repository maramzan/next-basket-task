import FeaturedProductsText from "@/app/components/featuredProductsText";
import { bestServiceData } from "@/constants";
import { colors } from "@/utils/colors";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const BestService = () => {
  return (
    <Box sx={classes.root}>
      <FeaturedProductsText />
      <Grid container sx={classes.iconsContainer}>
        {bestServiceData.map((service, index) => (
          <Grid item xs={12} sm={4} sx={classes.iconBox}>
            <Image src={service?.icon} alt="icon" width={72} height={72} />
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
              {service?.title}
            </Typography>
            <Typography
              fontWeight="medium"
              sx={{ mt: 2, textAlign: "center" }}
              variant="subtitle2"
            >
              {service?.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestService;

const classes = {
  root: {
    mt: 5,
  },
  iconsContainer: {
    display: "flex",
    justifyContent: { sm: "space-between", xs: "center" },
    mt: 10,
    alignItems: "center",
  },
  iconBox: {
    padding: "50px",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
