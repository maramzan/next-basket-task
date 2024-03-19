import React from "react";
import Header from "../components/header";

// import ProductsList from "../components/ProductsList";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <div>Product list here</div>
        {/* <ProductsList /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
