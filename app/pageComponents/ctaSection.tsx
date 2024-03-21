import { colors } from "@/utils/colors";
import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";

const CTASection = () => {
  return (
    <Box sx={classes.root}>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight="bold"
        color="primary"
      >
        Designing Better Experience
      </Typography>
      <Typography
        fontSize={40}
        mt={2}
        lineHeight="50px"
        textAlign={"center"}
        fontWeight="bold"
        maxWidth={"580px"}
      >
        Problems trying to resolve the conflict between
      </Typography>
      <Typography variant="body2" mt={2} textAlign="center" maxWidth={"400px"}>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </Typography>
      <Typography
        textAlign="center"
        variant="h5"
        color={colors.green}
        fontWeight="bold"
        mt={2}
      >
        $16.48
      </Typography>
      <Button
        sx={{ mt: 3, fontSize: "14px", fontWeight: "bold", color: "white" }}
        variant="contained"
      >
        Add your call to action
      </Button>
    </Box>
  );
};

export default CTASection;

const classes = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
    backgroundImage: "url('/assets/png/coverImage.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 20px",
  },
};
