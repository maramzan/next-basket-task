"use client";
import Footer from "@/app/commonComponents/footer";
import Header from "@/app/commonComponents/header";
import SocialSection from "@/app/commonComponents/socialSection";
import { Box, Container } from "@mui/material";
import React from "react";
import ClientsSection from "./pageComponents/clients";
import axios from "axios";

const Product = async ({ params }: { params: { id: number } }) => {
  const product = await getProjects(params.id);

  console.log("single product:", product);

  return (
    <div>
      <Header />
      <main>
        <Box sx={{ bgcolor: "white" }}>
          <Container>
            <ClientsSection />
          </Container>
          <SocialSection />
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Product;

async function getProjects(id: number) {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const projects = res.data;

  return projects;
}
