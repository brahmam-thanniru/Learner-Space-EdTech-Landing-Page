export function WhyChoose() {
  const items = [
    {
      title: "10 hrs/week",
      desc: "Save Time",
      info: "Automate registration and simplify workflow with intelligent tools.",
    },
    {
      title: "+35%",
      desc: "Increase Engagement",
      info: "Track & improve student participation through data-driven dashboards.",
    },
    {
      title: "96% accuracy",
      desc: "Better Decisions",
      info: "Make informed choices backed by real-time insights.",
    },
    {
      title: "5x faster",
      desc: "Streamline Workflows",
      info: "Improve response time with integrated automation.",
    },
  ];
  return (
    <section className="py-20 bg-orange-50/30 text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose Learner’s Space?</h2>
      <p className="text-slate-600 mb-10">
        Measurable results that transform your learning platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-6">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-xl font-semibold text-orange-500">
              {i.title}
            </div>
            <div className="text-sm font-semibold text-slate-800 mt-1">
              {i.desc}
            </div>
            <p className="text-sm text-slate-600 mt-2">{i.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
