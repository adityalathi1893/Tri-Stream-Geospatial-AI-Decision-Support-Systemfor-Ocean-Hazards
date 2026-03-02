import { useState } from 'react';
import { Avatar, Badge, IconButton, Menu, MenuItem, Divider } from '@mui/material';
import { Notifications, Search, Language, Warning } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleProfileClose = () => setAnchorEl(null);
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-sm font-semibold animate-pulse">
          <Warning fontSize="small" />
          <span>Alert Level: Elevated</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-1.5 text-slate-400" fontSize="small" />
          <input 
            type="text" 
            placeholder="Search location, ID..." 
            className="pl-8 pr-4 py-1.5 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64 transition-all"
          />
        </div>
        
        <IconButton size="small"><Language className="text-slate-600" /></IconButton>
        <IconButton size="small">
          <Badge badgeContent={4} color="error"><Notifications className="text-slate-600" /></Badge>
        </IconButton>

        {/* Interactive Profile Area */}
        <div 
          className="flex items-center gap-3 border-l pl-4 ml-2 border-slate-200 cursor-pointer hover:opacity-80"
          onClick={handleProfileClick}
        >
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-800 leading-tight">Admin User</p>
            <p className="text-xs text-slate-500">INCOIS Official</p>
          </div>
          <Avatar sx={{ bgcolor: '#1e3a8a', width: 36, height: 36 }}>A</Avatar>
        </div>

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileClose}
          PaperProps={{ sx: { width: 200, mt: 1.5 } }}
        >
          <MenuItem onClick={handleProfileClose}>My Profile</MenuItem>
          <MenuItem onClick={handleProfileClose}>System Settings</MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout} sx={{ color: 'red' }}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}