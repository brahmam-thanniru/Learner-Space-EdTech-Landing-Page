import { Button } from "@/components/ui/button";

export function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <div className="text-2xl font-bold text-orange-500">
            Learner <span className="text-slate-800">Space</span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {[
            { id: "home", label: "Home" },
            { id: "dashboard", label: "Dashboard" },
            { id: "why-choose", label: "Why Choose" },
            { id: "differentiator", label: "Difference" },
            { id: "complete-feature", label: "Complete Features" },
          ].map((link) => (
            <li
              key={link.id}
              className="cursor-pointer transition-colors relative group"
              onClick={() => handleScroll(link.id)}
            >
              <span className="hover:text-orange-500">{link.label}</span>

              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="!bg-white !border-2 !border-orange-500 !text-black hover:!bg-orange-50"
            onClick={() => redirectTo("https://portal.learnerspace.in/signup")}
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
    </nav>
  );
}
