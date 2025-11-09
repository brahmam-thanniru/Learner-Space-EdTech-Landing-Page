import { AlertCircle, TrendingDown, Target } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      text: "Thousands of learners browse, but few discover what truly fits their goals.",
    },
    {
      icon: TrendingDown,
      text: "High ad costs, low organic reach, and poor discovery limit sustainable growth.",
    },
    {
      icon: Target,
      text: "Quality courses don’t matter if learners can’t find them in time.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/50 to-white overflow-hidden">
      {/* 🟠 Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🧠 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Getting Learners to Notice You{" "}
            <span className="text-orange-500">Shouldn’t Be This Hard</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Learner Space fixes that by connecting intent with visibility ,
            helping the right students find your courses effortlessly.
          </p>
        </motion.div>

        {/* 🚫 Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="p-8 rounded-2xl bg-white border border-orange-100 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-orange-100/60 text-orange-500">
                <problem.icon className="w-7 h-7" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔗 Bridge Visual */}
        {/* 🔗 Responsive Bridge Visual */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-16 text-slate-700">
          {/* Learners */}
          <div className="px-6 py-3 rounded-lg bg-white border border-orange-100 shadow-sm font-medium">
            Learners
          </div>

          {/* Connector line */}
          <div className="md:flex-1 md:max-w-[120px] w-[2px] h-[60px] md:w-[120px] md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-slate-300 via-orange-400 to-slate-300 rounded-full"></div>

          {/* Learner Space center */}
          <div className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md">
            Learner Space
          </div>

          {/* Connector line */}
          <div className="md:flex-1 md:max-w-[120px] w-[2px] h-[60px] md:w-[120px] md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-orange-400 via-slate-300 to-slate-300 rounded-full"></div>

          {/* EdTechs */}
          <div className="px-6 py-3 rounded-lg bg-white border border-orange-100 shadow-sm font-medium">
            EdTechs
          </div>
        </div>
      </div>
    </section>
  );
}
