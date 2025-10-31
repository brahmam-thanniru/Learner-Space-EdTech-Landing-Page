export function CTA() {
  return (
    <section className="py-20 bg-orange-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-8">
        Choose a section below to begin managing your learning platform with
        powerful tools and insights.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-100">
          Visit Analytics Dashboard
        </button>
        <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition">
          Manage Companies
        </button>
      </div>
    </section>
  );
}
