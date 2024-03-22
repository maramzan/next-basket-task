"use client";
import { Box, Breadcrumbs, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { imageWidth } from "@/constants";

const ClientsSection = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {imageWidth.map((width, index) => (
          <Box py={5} key={index} mt={5} mx={2}>
            <Image
              src={`/assets/png/client${index + 1}.png`}
              alt="client"
              width={width + 50}
              height={80}
              layout="intrinsic"
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default ClientsSection;
