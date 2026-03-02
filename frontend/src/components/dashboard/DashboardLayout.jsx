import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <Topbar />
        
        {/* Scrollable Dashboard Content - This is where the specific page content goes */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}