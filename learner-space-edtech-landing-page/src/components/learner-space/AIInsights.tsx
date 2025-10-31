export function AIInsights() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-orange-500 mb-3">
            AI-Powered Insights
          </h3>
          <p className="text-slate-600 mb-4">
            Leverage artificial intelligence to get actionable recommendations
            and discover hidden trends in your learning data.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Automated detection of patterns</li>
            <li>Predictive analytics</li>
            <li>Anomaly detection and insights</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/assets/teacher-ai.jpg" alt="AI Insights" />
        </div>
      </div>
    </section>
  );
}
