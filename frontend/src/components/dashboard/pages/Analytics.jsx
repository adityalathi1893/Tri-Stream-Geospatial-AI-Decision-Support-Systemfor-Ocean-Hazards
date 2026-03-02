import DashboardLayout from '../DashboardLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter } from 'lucide-react';

const incidentData = [
  { name: 'Mon', reports: 120 }, { name: 'Tue', reports: 98 }, 
  { name: 'Wed', reports: 86 }, { name: 'Thu', reports: 199 }, 
  { name: 'Fri', reports: 250 }, { name: 'Sat', reports: 310 }, 
  { name: 'Sun', reports: 280 }
];

const hazardDistribution = [
  { name: 'High Waves', value: 400, color: '#3b82f6' },
  { name: 'Storm Surge', value: 300, color: '#f59e0b' },
  { name: 'Abnormal Tide', value: 200, color: '#8b5cf6' },
  { name: 'Tsunami Warning', value: 50, color: '#ef4444' }
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">System Analytics</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition shadow-sm">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-sm">
              <Download size={16} /> Export PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Incident Volume Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-6">Incident Reports (Last 7 Days)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incidentData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="reports" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Hazard Type Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-6">Hazard Classification</h3>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={hazardDistribution} innerRadius={80} outerRadius={110} paddingAngle={5} dataKey="value">
                    {hazardDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4 text-sm font-medium text-slate-600">
              {hazardDistribution.map(item => (
                <div key={item.name} className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}