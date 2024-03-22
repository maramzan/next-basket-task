"use client";
import { Box, Breadcrumbs, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
import Link from "next/link";
import { imageWidth } from "@/constants";

const ClientsSection = () => {
  const breadcrumbs = [
    <Link key="1" color="inherit" href="/">
      <Typography variant="body2" fontWeight="bold" color="text.primary">
        Home
      </Typography>
    </Link>,

    <Typography
      key="2"
      fontWeight="bold"
      variant="body2"
      color="text.secondary"
    >
      Breadcrumb
    </Typography>,
  ];

  return (
    <Stack>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
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
