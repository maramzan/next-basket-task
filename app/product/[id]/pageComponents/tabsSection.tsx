import { Box, Typography } from "@mui/material";
import React from "react";

const typographyStyles = {
  variant: "body2",
  fontWeight: "bold",
  p: 4,
  color: "text.secondary",
  cursor: "pointer",
};

const TabsSection = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography sx={{ ...typographyStyles, fontWeight: "600" }}>
        Description
      </Typography>
      <Typography sx={typographyStyles}>Additional Information</Typography>
      <Typography sx={typographyStyles}>
        <Box component="span">Reviews</Box>
        <Box color="secondary.main" component="span">
          {" (0)"}
        </Box>
      </Typography>
    </Box>
  );
};

export default TabsSection;
