"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <Container sx={classes.root}>
        <Typography variant="h5" fontWeight="bold">
          Bandage
        </Typography>
        <Box sx={classes.iconsContainer}>
          <FacebookRoundedIcon fontSize="medium" color="primary" />
          <InstagramIcon fontSize="medium" color="primary" />
          <TwitterIcon fontSize="medium" color="primary" />
        </Box>
      </Container>
    </Box>
  );
};
const classes = {
  root: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    padding: 4,
  },
  iconsContainer: {
    margin: { xs: "1rem 0", sm: "0" },
    width: "112px",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default SocialSection;
