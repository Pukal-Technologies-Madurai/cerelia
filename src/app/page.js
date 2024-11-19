import React from "react";
import { Hero, ProductSlide, BannerSlide } from "./components";

// import slider1 from "/images/slider-img.jpg";

export default function Home() {
  return (
    <React.Fragment>
      <BannerSlide
        images={["/images/slider-img.jpg", "/images/slider-img.jpg"]}
      />
      <Hero />
      <ProductSlide />
    </React.Fragment>
  );
}
