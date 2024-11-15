import React from "react";
import { Hero, ProductSlide, BannerSlide } from "./components";

import slider1 from "../../public/images/slider-img.png";

export default function Home() {
  return (
    <React.Fragment>
      <BannerSlide images={[slider1, slider1]} />
      <Hero />
      <ProductSlide />
    </React.Fragment>
  );
}
