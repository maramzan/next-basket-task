import { colors } from "@/utils/colors";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

const footerLinks = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

const Footer = () => {
  return (
    <>
      <Container
        sx={{
          padding: 4,
        }}
      >
        <Grid container>
          {footerLinks.map((link, index) => (
            <Grid key={index} item xs={12} sm={6} md={2}>
              <Typography variant="body1" fontWeight="bold" mt={4}>
                {link?.title}
              </Typography>
              <Box mt={2}>
                {link?.links.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    mt={2}
                    color={colors.textLight}
                    fontWeight="bold"
                    sx={{ cursor: "pointer" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" fontWeight="bold" mt={4}>
              Get In Touch
            </Typography>
            <Box sx={{ display: "flex", mt: 3 }} component="form">
              <TextField
                label="Your email"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
              <Button
                sx={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                variant="contained"
              >
                Subscribe
              </Button>
            </Box>
            <Typography variant="caption" mt={1} color={colors.textLight}>
              Lorem Ipsum dolar Amet
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#FAFAFA" }}>
        <Container>
          <Typography
            py={3}
            variant="body2"
            fontWeight="bold"
            color={colors.textLight}
          >
            Made With Love By Finland All Right Reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

const classes = {};

export default Footer;
