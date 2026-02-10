"use client";

import React from "react";
import dynamic from "next/dynamic";

const ProductInfo = dynamic(() => import("./ProductInfo"), { ssr: false });

export default function ProductInfoPage() {
    return <ProductInfo />;
}