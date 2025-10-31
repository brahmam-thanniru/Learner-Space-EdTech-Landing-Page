import React from "react";
import { Navbar } from "../components/learner-space/Navbar";
import { Hero } from "../components/learner-space/Hero";
import { Stats } from "../components/learner-space/Stats";
import Dashboard from "../components/learner-space/Dashboard";
import { WhyChoose } from "../components/learner-space/WhyChoose";
import { Features } from "../components/learner-space/Features";
import { Analytics } from "../components/learner-space/Analytics";
import { AIInsights } from "../components/learner-space/AIInsights";
import { CompleteFeatureSet } from "../components/learner-space/CompleteFeature";
import { Tabs } from "../components/learner-space/Tabs";
import { CTA } from "../components/learner-space/CTA";
import { Footer } from "../components/learner-space/Footer";

export default function LearnerSpace() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="features">
        <Features />
      </section>

      <section id="dashboard">
        <Dashboard />
      </section>

      <section id="why-choose">
        <WhyChoose />
      </section>

      <section id="analytics">
        <Analytics />
      </section>

      <section id="ai-insights">
        <AIInsights />
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
