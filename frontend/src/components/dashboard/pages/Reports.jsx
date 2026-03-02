import DashboardLayout from '../DashboardLayout';
import { Download, FileText, FileSpreadsheet, Activity, Calendar } from 'lucide-react';

export default function Reports() {
  const recentExports = [
    { id: 'REP-001', name: 'Weekly Situation Report - Chennai North', type: 'PDF', date: 'March 1, 2026', size: '2.4 MB' },
    { id: 'REP-002', name: 'Raw Social Media Mentions (Feb)', type: 'CSV', date: 'Feb 28, 2026', size: '15.1 MB' },
    { id: 'REP-003', name: 'INCOIS Alert Correlation Data', type: 'JSON', date: 'Feb 25, 2026', size: '800 KB' },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Reports & Data Export</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Export Generator Form */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Activity className="text-blue-600" size={20} /> Generate New Report
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">Report Type</label>
                  <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm outline-none focus:border-blue-500">
                    <option>Comprehensive Situation Report</option>
                    <option>Citizen Raw Data Export</option>
                    <option>Social Sentiment Analysis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">Date Range</label>
                  <div className="flex gap-2 relative">
                    <input type="date" className="w-full p-2 text-sm border border-slate-300 rounded-lg bg-slate-50 outline-none" />
                    <span className="self-center text-slate-400">to</span>
                    <input type="date" className="w-full p-2 text-sm border border-slate-300 rounded-lg bg-slate-50 outline-none" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked /> Include Heatmap Imagery
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked /> Append AI Event Summary
                  </label>
                </div>

                <button type="button" className="w-full mt-4 bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 transition">
                  Generate & Download
                </button>
              </form>
            </div>
          </div>

          {/* Recent Exports Panel */}
          <div className="lg:col-span-2">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-5 border-b border-slate-100 bg-slate-50">
                  <h2 className="text-lg font-bold text-slate-800">Archive & Recent Exports</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {recentExports.map((file) => (
                    <div key={file.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${
                          file.type === 'PDF' ? 'bg-red-100 text-red-600' : 
                          file.type === 'CSV' ? 'bg-emerald-100 text-emerald-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {file.type === 'PDF' ? <FileText size={24} /> : <FileSpreadsheet size={24} />}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{file.name}</p>
                          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {file.date}</span>
                            <span>•</span>
                            <span>{file.size}</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition font-semibold flex items-center gap-2 text-sm border border-transparent hover:border-blue-200">
                        <Download size={16} /> <span className="hidden sm:inline">Download</span>
                      </button>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}