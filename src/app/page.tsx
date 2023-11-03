"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
    </div>
  );
};

export default Page;
