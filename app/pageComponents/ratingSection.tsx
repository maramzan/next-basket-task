import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const RatingSection = () => {
  return (
    <Grid container spacing={1} mt={20}>
      <Grid item xs={12} sm={6} sx={classes.leftSection}>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          What they say about us
        </Typography>
        <Avatar
          src="/assets/png/rating-avatar.png"
          sx={classes.avatar}
          alt="reviewer image"
        />
        <Rating name="simple-controlled" value={4} sx={{ mt: "20px" }} />
        <Typography
          maxWidth={"450px"}
          variant="body2"
          fontWeight="bold"
          textAlign="center"
          mt={3}
        >
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </Typography>
        <Typography variant="body2" fontWeight="bold" mt={4} color="primary">
          Regina Miles
        </Typography>
        <Typography variant="body2" fontWeight="bold" mt={1}>
          Designer
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={classes.rightSection}>
        <Grid container spacing={1} sx={{ maxWidth: "460px" }}>
          {Array.from({ length: 9 }).map((_, index) => (
            <Grid item xs={4} key={index}>
              <Card sx={{ display: "block", width: "100%" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={`/assets/png/gridImage${index + 1}.png`}
                  alt="Paella dish"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RatingSection;

const classes = {
  leftSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: { xs: "0 20px" },
  },
  avatar: { height: "90px", width: "90px", mt: "30px" },
  rightSection: {
    padding: { xs: "0 20px", sm: "0 30px" },
    marginTop: { xs: "40px", sm: "0" },
  },
};
