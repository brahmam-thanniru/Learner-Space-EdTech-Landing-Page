export function Features() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Powerful Features Built for Scale
      </h2>
      <p className="text-slate-600 mb-16">
        Everything education companies and students need to succeed in one
        platform.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-orange-500 mb-3">
            Advanced Analytics Engine
          </h3>
          <p className="text-slate-600 mb-4">
            Harness the power of data with our comprehensive analytics suite.
            Gain insights into student engagement, course performance, and
            trends.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Real-time data with AI-driven capabilities</li>
            <li>Performance tracking & segmentation</li>
            <li>Custom KPI dashboards</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/assets/analytics-preview.jpg" alt="Analytics Engine" />
        </div>
      </div>
    </section>
  );
}
