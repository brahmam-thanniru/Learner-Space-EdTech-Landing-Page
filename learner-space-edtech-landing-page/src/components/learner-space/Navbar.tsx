import { Button } from "@/components/ui/button";

export function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <div className="text-2xl font-bold text-orange-500">
            Learner’s <span className="text-slate-800">Space</span>
          </div>
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {[
            { id: "home", label: "Home" },
            { id: "features", label: "Features" },
            { id: "dashboard", label: "Dashboard" },
            { id: "why-choose", label: "Why Choose" },
            { id: "analytics", label: "Analytics" },
            { id: "ai-insights", label: "AI Insights" },
            { id: "cta", label: "Contact" },
          ].map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="!bg-white !border-2 !border-orange-500 !text-black hover:!bg-orange-50"
          >
            Sign up
          </Button>

          <Button className="!bg-orange-500 !text-white hover:!bg-orange-600">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
}
