import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
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
    <>
      {/* 🧭 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-orange-500 cursor-pointer flex items-center gap-1"
            onClick={() => navigate("/")}
          >
            Learner <span className="text-slate-800">Space</span>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex items-center gap-8">
            {/* Links */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-700 items-center">
              {/* Home */}
              <li
                className="cursor-pointer relative group"
                onClick={() => navigate("/")}
              >
                <span className="group-hover:text-orange-500 transition-colors">
                  Home
                </span>
                <span className="absolute left-0 -bottom-[3px] w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </li>

              {/* About Us */}
              <li
                className="cursor-pointer relative group"
                onClick={() => navigate("/aboutus")}
              >
                <span className="group-hover:text-orange-500 transition-colors">
                  About Us
                </span>
                <span className="absolute left-0 -bottom-[3px] w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://portal.learnerspace.in/signup")
                }
                className="px-4 py-2 border-2 border-orange-500 text-black rounded-md hover:bg-orange-50 transition"
              >
                Sign up
              </button>

              <button
                onClick={() =>
                  (window.location.href = "https://portal.learnerspace.in/")
                }
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTACT SECTION */}
      <section
        ref={sectionRef}
        id="contact"
        className="relative w-screen overflow-hidden text-center py-32 px-6 bg-gradient-to-b from-white via-orange-50/60 to-white"
      >
        {/* Animated Background */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-24 left-16 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/30 to-orange-300/20 blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-24 right-16 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-300/20 blur-3xl"
        />

        {/* Header */}
        <motion.div
          className="relative z-10 text-center px-4 md:px-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
            Let’s Build Something Great Together
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg">
            Whether you have a question, want to start a project, or just want
            to say hi — we’d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
    </>
  );
}
