import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Alert, AlertTitle } from '@mui/material';

import HazardMap from './HazardMap';

const mockData = [{name: '10am', reports: 12}, {name: '11am', reports: 25}, {name: '12pm', reports: 45}, {name: '1pm', reports: 30}, {name: '2pm', reports: 80}];

export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Active Reports (1hr)", value: "84", trend: "+12%", color: "text-blue-600" },
          { title: "High-Risk Hotspots", value: "3", trend: "Critical", color: "text-red-600" },
          { title: "Social Sentiment", value: "Panic", trend: "Spiking", color: "text-orange-500" },
          { title: "Verification Ratio", value: "68%", trend: "Stable", color: "text-emerald-600" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</span>
              <span className="text-sm font-medium text-slate-400">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
       {/* Map Area (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-[500px]">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 z-20">
            <h2 className="font-bold text-slate-800">Live Geospatial Hazard Map</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-semibold bg-white border border-slate-300 rounded shadow-sm hover:bg-slate-100">Heatmap</button>
              <button className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 rounded shadow-sm">Clustered</button>
            </div>
          </div>
          
          {/* REPLACE THE LOADING TEXT WITH THIS EXACT DIV: */}
          <div className="flex-1 w-full h-full relative z-10 bg-slate-100">
             <HazardMap />
          </div>
          
       
          {/* Map Placeholder */}
          <div className="flex-1 bg-slate-200 relative flex items-center justify-center">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
             <p className="text-slate-500 font-medium z-10 flex flex-col items-center">
              
             </p>
          </div>
        </div>

        {/* Right Panel: Social Monitoring & Alerts */}
        <div className="space-y-6">
          {/* AI Summary Widget */}
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 text-4xl">🧠</div>
            <h3 className="font-bold mb-2 flex items-center gap-2">AI Event Summary</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Sudden spike in #StormSurge tweets detected near Chennai coast. 14 citizen reports confirm abnormal wave height. INCOIS forecast aligns with observed data.
            </p>
          </div>

          {/* Alert Feed */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-[310px] overflow-y-auto">
             <h3 className="font-bold text-slate-800 mb-4">Live Alert Feed</h3>
             <div className="space-y-3">
                <Alert severity="error" variant="filled" className="animate-in slide-in-from-right">
                  <AlertTitle>Critical Spike</AlertTitle>
                  High volume of reports in District A.
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Verification Pending</AlertTitle>
                  3 videos uploaded showing flood damage.
                </Alert>
                <Alert severity="info">
                  INCOIS Bulletin updated 2 mins ago.
                </Alert>
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Chart Row */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col">
         <h3 className="font-bold text-slate-800 mb-4">Report Volume vs Time</h3>
         <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <Tooltip />
                <Line type="monotone" dataKey="reports" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
}