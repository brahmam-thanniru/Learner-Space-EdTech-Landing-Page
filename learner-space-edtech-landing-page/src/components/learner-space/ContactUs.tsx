import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-screen overflow-hidden text-center py-28 px-6 bg-gradient-to-b from-white via-orange-50/60 to-white"
    >
      {/* 🟠 Animated Background Blobs */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-24 left-16 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/30 to-orange-300/20 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-24 right-16 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-300/20 blur-3xl"
      />

      {/* 🧭 Section Header */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
          Let’s Build Something Great Together
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg">
          Whether you have a question, want to start a project, or just want to
          say hi — we’d love to hear from you.
        </p>
      </motion.div>

      {/* 📍 Contact Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-100 p-10 text-left"
      >
        <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
          Contact Information
        </h3>

        <ul className="space-y-6">
          <li className="flex items-center gap-4 text-slate-700 justify-center">
            <Mail className="text-orange-500 w-6 h-6" />
            <span>info@learnerspace.in</span>
          </li>
          <li className="flex items-center gap-4 text-slate-700 justify-center">
            <Phone className="text-orange-500 w-6 h-6" />
            <span>+91 63932 46953</span>
          </li>
          <li className="flex items-center gap-4 text-slate-700 justify-center">
            <MapPin className="text-orange-500 w-6 h-6" />
            <span>Bangalore, India</span>
          </li>
        </ul>

        <div className="mt-10 border-t border-orange-100 pt-6 text-slate-600 text-center text-sm">
          <p>
            Our team typically replies within <strong>24 hours</strong>.
          </p>
          <p>We can’t wait to connect with you!</p>
        </div>
      </motion.div>
    </section>
  );
}
