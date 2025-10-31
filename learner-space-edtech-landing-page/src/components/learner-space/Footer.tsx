export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">Learner’s Space</h4>
          <p className="text-sm">
            AI-driven course analytics and management platform.
          </p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-3">Company Info</h5>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-3">Features</h5>
          <ul className="space-y-1 text-sm">
            <li>Student Monitoring</li>
            <li>Course Tracking</li>
            <li>AI Insights</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-3">Follow Us</h5>
          <div className="flex gap-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-10 text-slate-500">
        Made with ❤️ by Learner’s Space © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
