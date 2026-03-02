import { useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { MoreVertical, Shield, User as UserIcon, Search, CheckCircle, XCircle } from 'lucide-react';

const initialUsers = [
  { id: 'USR-001', name: 'Dr. A. Sharma', role: 'Admin', organization: 'INCOIS', status: 'Active', location: 'HQ' },
  { id: 'USR-042', name: 'R. Karthik', role: 'Researcher', organization: 'Anna University', status: 'Active', location: 'Chennai' },
  { id: 'USR-105', name: 'Priya M.', role: 'Volunteer', organization: 'Red Cross TN', status: 'Active', location: 'Mahabalipuram' },
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState('All');
  
  // 1. Logic to filter users based on the selected tab
  const filteredUsers = filter === 'All' 
    ? users 
    : users.filter(u => u.role === filter);

  // 2. Logic to mock adding a new user
  const handleInviteUser = () => {
    const randomId = Math.floor(Math.random() * 900) + 100;
    const newUser = {
      id: `USR-${randomId}`,
      name: 'New Citizen Reporter',
      role: 'Citizen',
      organization: 'Public',
      status: 'Pending Verification',
      location: 'Web App'
    };
    // Add new user to the top of the list
    setUsers([newUser, ...users]);
    setFilter('All'); // Reset filter to show the new user
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-slate-800">Access & Role Management</h1>
          <button 
            onClick={handleInviteUser}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-md active:scale-95"
          >
            + Invite New User
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Interactive Tabs */}
            <div className="flex gap-2 bg-slate-200/50 p-1 rounded-lg">
              {['All', 'Admin', 'Researcher', 'Volunteer', 'Citizen'].map(role => (
                <button 
                  key={role}
                  onClick={() => setFilter(role)}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
                    filter === role ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-2 text-slate-400" size={18} />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-sm outline-none" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">User Details</th>
                  <th className="p-4 font-semibold">Role Level</th>
                  <th className="p-4 font-semibold">Organization / Base</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors animate-in slide-in-from-top-2">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm border border-blue-200">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{user.name}</p>
                          <p className="text-xs text-slate-500 font-mono">{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        {user.role === 'Admin' ? <Shield size={16} className="text-purple-600"/> : <UserIcon size={16} className="text-blue-500"/>}
                        {user.role}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{user.organization}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                        user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                        user.status === 'Suspended' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {user.status === 'Active' && <CheckCircle size={12} />}
                        {user.status === 'Suspended' && <XCircle size={12} />}
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}