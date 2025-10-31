import { FileText, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Create Your Profile",
      description: "Add your programs, audience, and outcomes to get started.",
    },
    {
      icon: Search,
      title: "Get Discovered",
      description:
        "Show up in relevant searches from learners seeking your expertise.",
    },
    {
      icon: TrendingUp,
      title: "Track Results",
      description:
        "Access insights to optimize visibility and learner engagement.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-orange-50/40 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Partnering with{" "}
            <span className="text-orange-500">Learner Space</span> is Simple
          </h2>
          <p className="text-lg text-gray-600">
            Get started in minutes, our process is designed to make onboarding
            effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-500 to-orange-400 text-white shadow-lg">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-white border-2 border-orange-500 text-orange-500 font-bold rounded-full shadow-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Start Listing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
