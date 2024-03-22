"use client";
import Footer from "@/app/commonComponents/footer";
import Header from "@/app/commonComponents/header";
import SocialSection from "@/app/commonComponents/socialSection";
import { Box, Container } from "@mui/material";
import React from "react";
import ClientsSection from "./pageComponents/clients";
import axios from "axios";
import ProductDetails from "./pageComponents/productDetails";
import BreadCrumbs from "./pageComponents/bradCrumb";
import TabsSection from "./pageComponents/tabsSection";
import BestSeller from "./pageComponents/bestSeller";

const Product = async ({ params }: { params: { id: number } }) => {
  const product = await getProjects(params.id);

  return (
    <div>
      <Header />
      <main>
        <Box bgcolor={"#fafafa"}>
          <Container>
            <BreadCrumbs />
            <ProductDetails product={product} />
          </Container>
        </Box>
        <TabsSection />
        <BestSeller />
        <ClientsSection />

        <SocialSection bgColor="white" />
      </main>
      <Footer />
    </div>
  );
};

export default Product;

async function getProjects(id: number) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    const projects = res.data;

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
}
