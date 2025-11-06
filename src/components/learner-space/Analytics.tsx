export function Analytics() {
  return (
    <section className="py-20 bg-orange-50/50 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/assets/classroom.jpg" alt="Analytics Visualization" />
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold text-orange-500 mb-3">
            Intelligent Search & Filtering
          </h3>
          <p className="text-slate-600 mb-4">
            Find what you need instantly with smart search filters, predictive
            results, and personalized suggestions.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Multi-layered search</li>
            <li>Smart filter predictions</li>
            <li>Context-aware recommendations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
