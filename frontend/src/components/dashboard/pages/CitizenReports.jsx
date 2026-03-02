import { useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const initialReports = [
  { id: 'REP-8021', location: 'Kovalam Coast', type: 'Abnormal Tide', media: 'Yes', status: 'Pending' },
  { id: 'REP-8022', location: 'Ennore Port', type: 'Storm Surge', media: 'No', status: 'Verified' },
  { id: 'REP-8023', location: 'Besant Nagar', type: 'High Waves', media: 'Yes', status: 'Rejected' },
];

export default function CitizenReports() {
  // 1. Initialize State
  const [reports, setReports] = useState(initialReports);

  // 2. Action Handlers
  const handleVerify = (id) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'Verified' } : report
    ));
  };

  const handleReject = (id) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'Rejected' } : report
    ));
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <AlertTriangle className="text-orange-500" /> Field Reports Queue
          </h1>
          <div className="text-sm font-semibold text-slate-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
            Total Reports: {reports.length} | Pending: {reports.filter(r => r.status === 'Pending').length}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wide">
                <th className="p-4 font-semibold">Report ID</th>
                <th className="p-4 font-semibold">Location</th>
                <th className="p-4 font-semibold">Hazard Type</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{report.id}</td>
                  <td className="p-4 text-slate-600">{report.location}</td>
                  <td className="p-4 text-slate-600">{report.type}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                      report.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' :
                      report.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 animate-pulse' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2 justify-center">
                    {/* Disable buttons if already processed to show realistic UX */}
                    <button 
                      onClick={() => handleVerify(report.id)}
                      disabled={report.status === 'Verified'}
                      className={`p-1.5 rounded transition ${report.status === 'Verified' ? 'opacity-30 cursor-not-allowed' : 'text-emerald-600 hover:bg-emerald-100'}`}
                      title="Verify Report"
                    >
                      <CheckCircle size={20} />
                    </button>
                    <button 
                      onClick={() => handleReject(report.id)}
                      disabled={report.status === 'Rejected'}
                      className={`p-1.5 rounded transition ${report.status === 'Rejected' ? 'opacity-30 cursor-not-allowed' : 'text-red-600 hover:bg-red-100'}`}
                      title="Reject Report"
                    >
                      <XCircle size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}