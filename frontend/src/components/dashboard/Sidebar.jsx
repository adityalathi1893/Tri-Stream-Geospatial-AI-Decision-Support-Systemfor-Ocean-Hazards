import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Map, AlertTriangle, Activity, Users, FileText, Settings, Image as ImageIcon, BarChart2, LogOut } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Live Map', path: '/dashboard', icon: Map },
    { name: 'Analytics', path: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Citizen Reports', path: '/dashboard/reports', icon: AlertTriangle },
    { name: 'Social Monitoring', path: '/dashboard/social', icon: Activity },
    { name: 'Media Gallery', path: '/dashboard/media', icon: ImageIcon },
    { name: 'Reports', path: '/dashboard/reports-export', icon: FileText },
    { name: 'User Management', path: '/dashboard/users', icon: Users },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.clear(); // Clear auth tokens
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
        <div className="text-xl font-bold text-white flex items-center gap-2">
          🌊 OceanGuard
        </div>
      </div>

      <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={index}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 hover:text-red-300 rounded-lg text-sm font-bold transition-all"
        >
          <LogOut size={18} />
          Secure Logout
        </button>
      </div>
    </div>
  );
}