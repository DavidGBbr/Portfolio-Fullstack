"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SocialLinks />
      <BackToTop />
    </div>
  );
};

export default Page;
