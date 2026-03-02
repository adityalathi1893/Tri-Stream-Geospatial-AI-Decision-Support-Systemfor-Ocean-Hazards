import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

import Analytics from './components/dashboard/pages/Analytics';
import CitizenReports from './components/dashboard/pages/CitizenReports';
import SocialMonitoring from './components/dashboard/pages/SocialMonitoring';
import MediaGallery from './components/dashboard/pages/MediaGallery';
import UserManagement from './components/dashboard/pages/UserManagement';
// 1. Add these two imports:
import Settings from './components/dashboard/pages/Settings';
import Reports from './components/dashboard/pages/Reports';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/reports" element={<CitizenReports />} />
          <Route path="/dashboard/social" element={<SocialMonitoring />} />
          <Route path="/dashboard/media" element={<MediaGallery />} />
          <Route path="/dashboard/users" element={<UserManagement />} />
          
          {/* 2. Add these two routes: */}
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/reports-export" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}