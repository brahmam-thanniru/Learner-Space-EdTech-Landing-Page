import { Linkedin, Twitter, Facebook, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-lg">
            Learner Space
          </h4>
          <p className="text-sm leading-relaxed">
            Empowering EdTech companies to grow through AI-powered course
            discovery, analytics, and lead generation.
          </p>
        </div>

        {/* Company Info */}
        <div>
          <h5 className="text-white font-semibold mb-3">Company</h5>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>
            <li>
              <p
                className="hover:text-orange-500 transition"
                onClick={() => navigate("/contact ")}
              >
                Partner With Us
              </p>
            </li>
            <li>
              <p
                className="hover:text-orange-500 transition"
                onClick={() => navigate("/contact ")}
              >
                Contact Us
              </p>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h5 className="text-white font-semibold mb-3">Solutions</h5>
          <ul className="space-y-1 text-sm">
            <li>AI-Powered Discovery</li>
            <li>Lead Generation for EdTech</li>
            <li>Course Performance Analytics</li>
            <li>Custom Integrations</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h5 className="text-white font-semibold mb-3">Connect With Us</h5>
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-orange-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-500 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-500 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs mt-10 text-slate-500">
        Made with ❤️ by Learner Space © {new Date().getFullYear()} , Helping
        learners find you in the crowded EdTech space.
      </div>
    </footer>
  );
}
