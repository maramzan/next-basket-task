import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { colors } from "@/utils/colors";

const MyGrid = () => {
  return (
    <Grid container spacing={1} sx={classes.root}>
      <Grid item xs={12} sm={5}>
        <Box sx={classes.mainItem}>
          <TextComponent />
        </Box>
      </Grid>

      <Grid item xs={12} sm={7}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={classes.wideItem}>
              <TextComponent />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={classes.smallItem}>
              <TextComponent />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={classes.smallItem2}>
              <TextComponent />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyGrid;

const TextComponent = () => {
  return (
    <>
      <Typography variant="body2" fontWeight="bold" color={colors.green}>
        5 Items
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        Furniture
      </Typography>
      <Typography fontWeight="bold" variant="body2">
        Read More
      </Typography>
    </>
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
  mainItem: {
    height: { xs: "300px", sm: "100%" },
    padding: "20px",
    backgroundImage: `url('/assets/png/image-1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  wideItem: {
    height: "300px",
    padding: "20px",
    backgroundImage: `url('/assets/png/image-2.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  smallItem: {
    height: "300px",
    padding: "20px",
    backgroundImage: `url('/assets/png/image-3.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  smallItem2: {
    height: "300px",
    padding: "20px",
    backgroundImage: `url('/assets/png/image-4.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};
