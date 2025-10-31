export function CompleteFeatureSet() {
  const sets = [
    {
      title: "Platform & Branding",
      features: ["Role customization", "Brand templates", "Usage Reports"],
    },
    {
      title: "User Management",
      features: ["User Tracking", "Access Control", "Progress Reports"],
    },
    {
      title: "Security & Access",
      features: ["Access Control", "SSO Integration", "Audit Logs"],
    },
    {
      title: "Course Management",
      features: ["Add / Edit Courses", "Bulk Upload", "Course Analytics"],
    },
  ];
  return (
    <section className="py-20 bg-orange-50/40 text-center">
      <h2 className="text-3xl font-bold mb-4">Complete Feature Set</h2>
      <p className="text-slate-600 mb-10">
        All the tools you need, organized by category
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sets.map((set, idx) => (
          <div key={idx} className="p-6 bg-white border rounded-2xl shadow-sm">
            <h4 className="text-lg font-semibold text-orange-500 mb-2">
              {set.title}
            </h4>
            <ul className="text-sm text-slate-600 space-y-1">
              {set.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
