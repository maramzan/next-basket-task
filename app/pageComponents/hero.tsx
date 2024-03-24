import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

const MyGrid = () => {
  return (
    <Grid container spacing={1} sx={classes.root}>
      <Grid item xs={12} sm={5}>
        <Box sx={classes.item} position="relative">
          <Image
            src="/assets/png/image-1.webp"
            layout="fill"
            objectFit="cover"
            alt="hero image"
          />
          <TextComponent fontSize={40} />
        </Box>
      </Grid>

      <Grid item xs={12} sm={7}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={classes.item2} position="relative">
              <Image
                src="/assets/png/image-2.webp"
                layout="fill"
                objectFit="cover"
                alt="hero image"
              />
              <TextComponent />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={classes.item2} position="relative">
              <Image
                src="/assets/png/image-3.webp"
                layout="fill"
                objectFit="cover"
                alt="hero image"
              />
              <TextComponent />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={classes.item2} position="relative">
              <Image
                src="/assets/png/image-4.webp"
                layout="fill"
                objectFit="cover"
                alt="hero image"
              />
              <TextComponent />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyGrid;

const TextComponent = ({ fontSize }: { fontSize?: number }) => {
  return (
    <Box style={{ position: "relative" }}>
      <Typography variant="body2" fontWeight="bold" color="green">
        5 Items
      </Typography>
      <Typography variant="h5" fontSize={`${fontSize}px`} fontWeight="bold">
        Furniture
      </Typography>
      <Typography fontWeight="bold" variant="body2">
        Read More
      </Typography>
    </Box>
  );
};

const classes = {
  root: {
    maxWidth: "1150px",
    maxHeight: { sm: "650px" },
    height: "100%",
    width: "100%",
    marginTop: "30px",
  },
  item: {
    height: { xs: "300px", sm: "100%" },
    padding: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  item2: {
    height: "300px",
    padding: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};
