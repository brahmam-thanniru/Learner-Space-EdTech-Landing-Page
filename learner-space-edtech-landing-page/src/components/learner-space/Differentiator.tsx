import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Differentiator() {
  const values = [
    "Neutral platform ,  no course sales or commissions",
    "Transparency-first approach builds learner trust",
    "Access to engagement analytics and performance insights",
    "Organic discovery → lower acquisition costs (CAC)",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/60 to-white overflow-hidden">
      {/* 🌀 Soft Orange Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* 🧠 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4"
        >
          We’re Not Another Platform ,{" "}
          <span className="text-orange-500">We’re Your Discovery Partner</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto mb-16"
        >
          Empowering EdTech companies to grow with transparency, analytics, and
          smarter discovery , not paid ads or commissions.
        </motion.p>

        {/* ✅ Value Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-start gap-4 text-left"
            >
              <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-slate-700 text-lg leading-relaxed">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
