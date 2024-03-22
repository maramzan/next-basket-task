import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCrumbs = () => {
  const breadcrumbs = [
    <Link key="1" color="inherit" href="/" style={{ textDecoration: "none" }}>
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
      Shop
    </Typography>,
  ];
  return (
    <Breadcrumbs
      sx={{ padding: "40px 0" }}
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
