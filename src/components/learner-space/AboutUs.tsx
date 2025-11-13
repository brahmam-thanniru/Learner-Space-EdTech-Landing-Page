import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  Home,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function AboutUs() {
  const navigate = useNavigate();
  const redirectTo = (url: string) => {
    window.location.href = url;
  };
  const features = [
    {
      icon: Shield,
      title: "Verified Reviews",
      description:
        "Build trust with authentic, verified learner feedback for your programs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Show Real Outcomes",
      description:
        "Showcase placement results, learner success stories, and performance data.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Zap,
      title: "AI-Powered Discovery",
      description:
        "Get matched with learners actively searching for courses like yours.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Deep Comparisons",
      description:
        "Stand out by letting learners compare programs based on real data — not ad budgets.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-orange-100/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-orange-500 cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            Learner <span className="text-slate-800">Space</span>
          </motion.div>

          {/* RIGHT SIDE: Links + Buttons */}
          <div className="flex items-center gap-8">
            {/* Nav Links */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-700 items-center">
              {/* Home */}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="cursor-pointer relative group flex items-center gap-2"
                onClick={() => navigate("/")}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline group-hover:text-orange-500 transition-colors">
                  Home
                </span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.li>

              {/* Contact */}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="cursor-pointer relative group flex items-center gap-2"
                onClick={() => navigate("/contact")}
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline group-hover:text-orange-500 transition-colors">
                  Contact
                </span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            </ul>

            {/* Buttons */}
            <div className="hidden md:flex gap-3">
              <Button
                variant="outline"
                className="!bg-white !border-2 !border-orange-500 !text-black hover:!bg-orange-50"
                onClick={() =>
                  redirectTo("https://portal.learnerspace.in/signup")
                }
              >
                Sign up
              </Button>

              <Button
                className="!bg-orange-500 !text-white hover:!bg-orange-600"
                onClick={() => redirectTo("https://portal.learnerspace.in/")}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold text-orange-700">
                A Discovery Platform Built for EdTech Brands
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 text-center leading-[1.1]"
          >
            Helping EdTech Companies Get
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 ml-2">
              Discovered
            </span>{" "}
            by the Right Learners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto text-center mt-6"
          >
            We enable EdTech companies to onboard, list their programs, and
            reach high-intent learners without relying on heavy advertising
            budgets.
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            The Visibility Gap in{" "}
            <span className="text-orange-500">EdTech</span>
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 rounded-r-xl"
            >
              <p className="text-lg text-slate-700">
                Quality EdTech companies often struggle to get noticed. Bigger
                players dominate with advertising, while smaller and mid-sized
                providers with excellent outcomes remain hidden.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-r-xl"
            >
              <p className="text-lg text-slate-700">
                Learners can’t find the right programs easily, and EdTech
                companies lose thousands of potential students simply because
                the discovery ecosystem is broken.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl text-center mt-12"
            >
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p className="text-2xl">
                Our mission is simple: empower every EdTech company in India to
                be discovered, trusted, and chosen based on their quality — not
                their marketing budget.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            How We{" "}
            <span className="text-orange-500">Empower EdTech Companies</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                whileHover={{ y: -6 }}
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} inline-flex mb-4`}
                >
                  <feature.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-center text-white relative overflow-hidden">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-orange-400" />

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Grow Your EdTech Business Together
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Onboard your company, list your programs, and reach high-intent
          learners.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            (window.location.href = "https://portal.learnerspace.in/signup")
          }
          className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          Enroll Now
        </motion.button>
      </section>
    </>
  );
}
