import React from "react";
import { Hero, ProductSlide, BannerSlide } from "./components";

// import slider1 from "/images/slider-img.jpg";

export default function Home() {
  return (
    <React.Fragment>
      <BannerSlide
        images={["/images/Banner.jpg", "/images/Banner.jpg"]}
      />
      <Hero />
      <ProductSlide />
    </React.Fragment>
  );
}
