"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
};

export default Page;
