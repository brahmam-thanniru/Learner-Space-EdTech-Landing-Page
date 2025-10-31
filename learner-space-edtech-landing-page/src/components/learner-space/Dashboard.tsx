import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart2, Target, Users, CheckCircle2, Star } from "lucide-react";
import { useRef } from "react";

export default function Dashboard() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const cards = [
    {
      title: "Lead Management Dashboard",
      desc: "Track, analyze, and manage every learner interaction. View how many users discovered your courses, clicked through, and converted ,  all in real time.",
      icon: <Target className="text-orange-500 w-8 h-8" />,
      features: [
        "Centralized lead tracking",
        "Real-time conversion metrics",
        "Automated lead assignment",
      ],
      popular: true,
    },
    {
      title: "Performance Analytics",
      desc: "Gain insights into course engagement and marketing ROI. Identify which categories attract the most traffic and optimize based on data, not guesswork.",
      icon: <BarChart2 className="text-orange-500 w-8 h-8" />,
      features: [
        "Engagement heatmaps",
        "Course-level analytics",
        "Campaign ROI visualization",
      ],
    },
    {
      title: "Audience Insights",
      desc: "Understand your learners better. Discover demographic trends, preferred learning paths, and intent-based interest patterns to fine-tune your offerings.",
      icon: <Users className="text-orange-500 w-8 h-8" />,
      features: [
        "Learner segmentation",
        "AI-based interest mapping",
        "Predictive audience behavior",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="dashboard"
      className="relative w-screen overflow-hidden text-center py-28 px-6 bg-gradient-to-b from-white via-orange-50/60 to-white"
    >
      {/* Animated background shapes */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-orange-200/30 to-orange-300/20 blur-3xl"
      />

      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-40 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-300/20 blur-3xl"
      />

      {/* Section Header */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
          Manage, Measure & Maximize Your Growth
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg">
          Your company control center , visualize leads, monitor course
          performance, and uncover learner insights from a single powerful
          dashboard.
        </p>
      </motion.div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, rotateX: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                delay: i * 0.15,
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileHover={{
              y: -15,
              scale: 1.04,
              boxShadow: "0px 30px 60px rgba(251, 146, 60, 0.15)",
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-100 hover:border-orange-200 transition-all duration-500 p-10 group"
          >
            {/* Popular tag */}
            {card.popular && (
              <div className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-white" /> Most Used
              </div>
            )}

            {/* Icon */}
            <div className="flex justify-center items-center mb-6 relative">
              <motion.div
                className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 flex items-center justify-center rounded-full shadow-lg relative z-10"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
              >
                {card.icon}
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-20 h-20 border-2 border-orange-300 rounded-full"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              {card.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {card.desc}
            </p>

            <ul className="text-left space-y-2">
              {card.features.map((f, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors"
                >
                  <CheckCircle2 className="text-orange-500 w-4 h-4" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
