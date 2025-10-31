import { motion, useScroll, useTransform } from "framer-motion";
import { Star, BarChart2, User, Sparkles, CheckCircle2 } from "lucide-react";
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
      title: "For EdTech Companies",
      desc: "Register your company, upload courses, and track engagement with powerful analytics. See which courses students engage with most and optimize your offerings.",
      icon: <BarChart2 className="text-orange-500 w-8 h-8" />,
      features: ["Easy course management", "Real-time engagement metrics"],
      popular: true,
    },
    {
      title: "For Students",
      desc: "Discover courses tailored to your needs with AI-powered recommendations. Filter by category, difficulty, and more to find your perfect learning path.",
      icon: <User className="text-orange-500 w-8 h-8" />,
      features: ["Smart course recommendations", "Advanced filtering options"],
    },
    {
      title: "AI-Powered Platform",
      desc: "Our advanced AI algorithms match students with the right courses and help companies understand engagement patterns for data-driven decisions.",
      icon: <Sparkles className="text-orange-500 w-8 h-8" />,
      features: ["Intelligent matching", "Predictive analytics"],
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

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-1/4 w-20 h-20 border-4 border-orange-300/40 rounded-xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-orange-500/10 rounded-full"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-20 w-12 h-12 border-4 border-blue-300/30 rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-32 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-pink-300/10 rounded-lg"
      />

      {/* Floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-orange-400/50 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}

      {/* Main parallax background */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-orange-100 to-orange-200 blur-3xl"
      />

      <motion.div
        className="relative z-10 text-center px-4 md:px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
            Explore Your Dashboard
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg"
        >
          Access powerful tools and insights across three comprehensive modules.
        </motion.p>
      </motion.div>

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
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Gradient overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-3xl pointer-events-none"
            />

            {card.popular && (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: i * 0.15 + 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
              >
                <Star className="w-3 h-3 fill-white" /> Most Popular
              </motion.div>
            )}

            <div className="flex justify-center items-center mb-6 relative">
              <motion.div
                className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 flex items-center justify-center rounded-full shadow-lg relative z-10"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: i * 0.15 + 0.3,
                  duration: 0.8,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                {card.icon}
              </motion.div>

              {/* Pulsing ring effect */}
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

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-slate-900 mb-3"
            >
              {card.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.15 + 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-600 text-sm leading-relaxed mb-6"
            >
              {card.desc}
            </motion.p>

            <ul className="text-left space-y-2">
              {card.features.map((f, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.15 + 0.6 + idx * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="text-orange-500 w-4 h-4" />
                  </motion.div>
                  {f}
                </motion.li>
              ))}
            </ul>

            {/* Shimmer effect on hover */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-3xl"
              style={{ transform: "skewX(-20deg)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom floating shapes */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/10 rounded-full blur-xl"
      />
    </section>
  );
}
