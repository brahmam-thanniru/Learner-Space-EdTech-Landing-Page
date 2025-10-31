import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-screen overflow-hidden text-center py-28 px-6 bg-gradient-to-b from-white via-orange-50/60 to-white">
      {/* 🌀 Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating orange circle - top left */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-300/40 rounded-full blur-[100px]"
        ></motion.div>

        {/* Floating yellow circle - bottom right */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-amber-200/50 rounded-full blur-[120px]"
        ></motion.div>

        {/* Soft overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/70" />
      </div>

      {/* 🧠 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-800 max-w-4xl mx-auto"
      >
        Empowering{" "}
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block text-orange-500 transition-transform"
        >
          Learning & Growth
        </motion.span>{" "}
        with
        <br className="hidden md:block" /> AI-Driven Education Solutions
      </motion.h1>

      {/* 📘 Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
      >
        Discover, manage, and scale your educational platform with intelligent
        insights and automation.
      </motion.p>

      {/* 🔘 Buttons with hover animations */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 24px rgba(249,115,22,0.4)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Button
            size="lg"
            className="!bg-orange-500 !text-white hover:!bg-orange-600 hover:!border-orange-500 px-8 py-6 text-lg rounded-xl transition-all duration-200"
          >
            Get Started
          </Button>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(249,115,22,0.2)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="!bg-white !border-2 !border-orange-500 !text-black hover:!bg-orange-50 px-8 py-6 text-lg rounded-xl transition-all duration-200"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* ✨ Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-sm text-slate-500"
      >
        Trusted by 10,000+ students and 500+ educational institutions
      </motion.p>
    </section>
  );
}
