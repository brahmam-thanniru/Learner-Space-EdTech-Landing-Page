export function Stats() {
  const stats = [
    { value: "150+", label: "Active Companies" },
    { value: "5,000+", label: "Total Students" },
    { value: "3,200+", label: "Courses Added" },
    { value: "85%", label: "Completion Rate" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-orange-50/50 border border-orange-100"
          >
            <div className="text-2xl font-bold text-orange-500">{s.value}</div>
            <div className="text-sm text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
