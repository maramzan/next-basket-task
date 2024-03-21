import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "./components/hero";
import { Box, Container } from "@mui/material";
import BestService from "./components/bestService";
import FeaturedPosts from "./components/featuredPosts";
import RatingSection from "./components/ratingSection";
import CTASection from "./components/ctaSection";
import SocialSection from "./components/socialSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Box sx={{ bgcolor: "white" }}>
          <Container>
            <Hero />
            <BestService />
            <FeaturedPosts />
            <RatingSection />
          </Container>
          <CTASection />
          <Container>
            <SocialSection />
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
