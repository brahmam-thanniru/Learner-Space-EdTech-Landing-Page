import { Building2, Users, Target, Rocket, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      value: "500+",
      label: "Registered EdTech Companies",
      growth: "+22%",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "25,000+",
      label: "Verified Learner Leads Generated",
      growth: "+48%",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      value: "3,200+",
      label: "Courses Promoted",
      growth: "+17%",
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-600" />,
      value: "92%",
      label: "Partner Growth Satisfaction",
      growth: "+9%",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-gray-100 shadow-sm bg-white p-8 text-center transition-transform"
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-gray-500 text-base mt-1">{stat.label}</div>
            <div className="inline-flex items-center gap-1 mt-4 bg-gray-50 px-3 py-1 rounded-full text-sm text-green-600 font-medium">
              <ArrowUpRight className="w-4 h-4" />
              {stat.growth}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
