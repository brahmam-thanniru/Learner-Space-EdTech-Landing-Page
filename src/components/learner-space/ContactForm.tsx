import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, User, X } from "lucide-react";
import { useState } from "react";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const sendEmail = async (data: any) => {
  const payload = {
    access_key: "70370f02-ee10-4b91-a081-6e14f7d0eb5a",
    ...data,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result.success;
  } catch {
    return false;
  }
};

export default function ContactFormPopup({
  isOpen,
  onClose,
}: ContactFormPopupProps) {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await sendEmail({
      name,
      email,
      phone,
      message,
      subject: `New Contact Form Message from ${name}`,
    });

    setLoading(false);

    if (success) {
      alert("Message sent successfully! We’ll contact you soon.");
      onClose(); // close modal
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Failed to send message. Please try again!");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-orange-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-600 hover:text-orange-500 transition"
            >
              <X size={22} />
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-center text-slate-600 mb-6">
              We'd love to hear from you — send us a message!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 py-3 px-4 rounded-lg">
                <User className="text-orange-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent outline-none text-slate-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 py-3 px-4 rounded-lg">
                <Mail className="text-orange-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent outline-none text-slate-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 py-3 px-4 rounded-lg">
                <Phone className="text-orange-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-transparent outline-none text-slate-700"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 outline-none text-slate-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-xl transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
