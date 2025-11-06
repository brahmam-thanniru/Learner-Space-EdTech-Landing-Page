import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white text-center overflow-hidden">
      {/* 🔆 Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/20 blur-[150px] rounded-full"
      />

      <div className="relative container mx-auto px-6">
        {/* ✨ Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Be Where Learners Begin Their Journey
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join Learner Space and get discovered by learners looking for your
            programs today.
          </p>
        </motion.div>

        {/* 🔘 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-6 font-semibold shadow-md"
          >
            Register Your Company
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="!border-2 !border-white !text-white hover:!bg-white hover:!text-orange-600 text-lg px-10 py-6 font-semibold"
          >
            Learn How It Works
          </Button>
        </motion.div>

        {/* 🧡 Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm text-white/80"
        >
          Trusted by 500+ EdTech companies to reach 10,000+ learners worldwide
        </motion.p>
      </div>
    </section>
  );
}
