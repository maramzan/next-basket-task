import Image from "next/image";
import styles from "./page.module.css";
import { Box, CircularProgress, Container, ThemeProvider } from "@mui/material";
import theme from "@/utils/theme";

import React, { Suspense } from "react";
import Header from "./commonComponents/header";
import Footer from "./commonComponents/footer";
import Hero from "./pageComponents/hero";
import BestService from "./pageComponents/bestService";
import FeaturedPosts from "./pageComponents/featuredPosts";
import RatingSection from "./pageComponents/ratingSection";
import CTASection from "./pageComponents/ctaSection";
import SocialSection from "./commonComponents/socialSection";
import ProductsSection from "./pageComponents/productsSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Box sx={{ bgcolor: "white" }}>
          <Container>
            <Hero />
            <ProductsSection />
            <BestService />
            <FeaturedPosts />
            <RatingSection />
          </Container>
          <CTASection />
          <SocialSection />
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
