import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 px-8 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold flex items-center gap-2 tracking-wide">
          🌊 OceanGuard
        </div>
        <div className="space-x-6 flex items-center">
          <Link to="/login" className="font-medium hover:text-blue-300 transition">Log In</Link>
          <Link to="/signup" className="bg-blue-500 px-5 py-2 rounded-lg font-semibold hover:bg-blue-400 transition shadow-sm">
            Join the Network
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8 mt-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 max-w-4xl leading-tight">
          Unified Citizen Reporting for <span className="text-blue-600">Ocean Hazards</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Empowering coastal communities and authorities in India with real-time field reports, social media monitoring, and early warnings for tsunamis, storm surges, and abnormal sea behavior.
        </p>
        
        <div className="mt-10 space-x-4">
          <Link to="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg">
            Report a Hazard
          </Link>
          <Link to="/login" className="bg-white text-blue-900 border-2 border-blue-200 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition shadow-sm">
            Official Dashboard
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-16 px-8 border-t border-slate-200 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Real-Time Reporting</h3>
            <p className="text-slate-600">
              Citizens can submit geotagged photos and descriptions of abnormal ocean activity, even offline.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Dynamic Hotspot Maps</h3>
            <p className="text-slate-600">
              Authorities gain enhanced situational awareness with aggregated field reports overlaid on predictive models.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Social Media Analytics</h3>
            <p className="text-slate-600">
              NLP-driven tools mine public discussions during hazard events to capture on-ground reality and public sentiment.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 p-6 text-center text-sm">
        <p>© 2026 OceanGuard Hazard Management System. Supporting INCOIS initiatives.</p>
      </footer>
    </div>
  );
}