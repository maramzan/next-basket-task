import React from "react";
import Header from "../components/header";

// import ProductsList from "../components/ProductsList";
import Footer from "../components/footer";
import Hero from "./components/hero";
import { Box, Container } from "@mui/material";
import BestService from "./components/bestService";
import FeaturedPosts from "./components/featuredPosts";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Box sx={{ bgcolor: "white" }}>
          <Container>
            {/* <Hero /> */}
            <BestService />
            <FeaturedPosts />
          </Container>
        </Box>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
