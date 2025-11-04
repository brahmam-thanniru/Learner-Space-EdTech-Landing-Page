import React from "react";
import { Navbar } from "../components/learner-space/Navbar";
import { Hero } from "../components/learner-space/Hero";
import { Stats } from "../components/learner-space/Stats";
import Dashboard from "../components/learner-space/Dashboard";
import { WhyChoose } from "../components/learner-space/WhyChoose";
import { Features } from "../components/learner-space/Features";
import { CompleteFeatureSet } from "../components/learner-space/CompleteFeature";
import { Tabs } from "../components/learner-space/Tabs";
import { CTA } from "../components/learner-space/CTA";
import { Footer } from "../components/learner-space/Footer";
import { Differentiator } from "@/components/learner-space/Differentiator";
import { ProblemSection } from "@/components/learner-space/ProblemStatement";
import HowItWorks from "@/components/learner-space/HowItWorks";

export default function LearnerSpace() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="problem-section">
        <ProblemSection />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      {/* <section id="features">
        <Features />
      </section> */}

      <section id="dashboard">
        <Dashboard />
      </section>

      <section id="why-choose">
        <WhyChoose />
      </section>
      <section id="differentiator">
        <Differentiator />
      </section>
      <section id="complete-feature">
        <CompleteFeatureSet />
      </section>

      <section id="tabs">
        <Tabs />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </div>
  );
}
