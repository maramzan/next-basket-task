import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
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
    <Container sx={{ display: { xs: "none", md: "block" }, pb: 10 }}>
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
      <Divider sx={{ border: "1px solid #ECECEC" }} />
      <Box display={"flex"} mt={5}>
        <Box pr={2}>
          <Typography variant="h5" fontWeight="bold">
            the quick fox jumps over{" "}
          </Typography>
          <Typography
            maxWidth={"510px"}
            variant="body2"
            lineHeight="20px"
            color="text.secondary"
            mt={3}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.{" "}
          </Typography>
          <Typography
            maxWidth={"510px"}
            variant="body2"
            lineHeight="20px"
            color="text.secondary"
            mt={3}
            pl={2}
            borderLeft={"3px solid #23856D"}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.{" "}
          </Typography>
          <Typography
            maxWidth={"510px"}
            variant="body2"
            lineHeight="20px"
            color="text.secondary"
            mt={3}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.{" "}
          </Typography>
        </Box>
        <Image
          style={{ marginLeft: "auto", paddingRight: "10px" }}
          src="/assets/png/section.png"
          alt="product"
          width={413}
          height={372}
        />
      </Box>
    </Container>
  );
};

export default TabsSection;
