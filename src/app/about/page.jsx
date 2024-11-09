"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function About() {
    const router = useRouter();

    return (
        <React.Fragment>
            <h1>About</h1>
            <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">
                Home
            </button>
        </React.Fragment>
    );
}