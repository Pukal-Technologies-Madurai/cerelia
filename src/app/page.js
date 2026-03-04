import React from "react";
import { Hero, ProductSlide, BannerSlide } from "./components";

// import slider1 from "/images/slider-img.jpg";

export default function Home() {
  return (
    <React.Fragment>
      <BannerSlide
        // images={["/images/Banner.jpg", "/images/Banner.jpg"]}
        images={["/images/banner-1.png", "/images/banner-2.png", "/images/banner-3.png", "/images/banner-4.png"]}
      />
      <Hero />
      <ProductSlide />
    </React.Fragment>
  );
}
