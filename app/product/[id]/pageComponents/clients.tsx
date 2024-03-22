import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { imageWidth } from "@/constants";

const ClientsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {imageWidth.map((width, index) => (
          <Box key={index} mt={5} mx={2}>
            <Image
              src={`/assets/png/client${index + 1}.png`}
              alt="client"
              width={width}
              height={60}
              layout="intrinsic"
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default ClientsSection;
