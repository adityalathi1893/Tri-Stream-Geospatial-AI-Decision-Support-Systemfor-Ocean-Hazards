import { useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { Settings as SettingsIcon, Bell, Shield, Database, Globe, CheckCircle } from 'lucide-react';

export default function Settings() {
  // 1. State for Tabs Navigation
  const [activeTab, setActiveTab] = useState('api');

  // 2. State for Form Data
  const [formData, setFormData] = useState({
    autoSync: true,
    syncInterval: 5,
    twitterToken: '************************',
    nlpThreshold: 'High',
    emailAlerts: true,
    smsAlerts: false,
    retentionDays: 30,
    require2FA: true,
  });

  // 3. State for Save Button Animation
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  // Simulate API Save Request
  const handleSave = () => {
    setIsSaving(true);
    // Fake a 1-second network delay
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
        
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <SettingsIcon className="text-slate-500" /> System Configuration
          </h1>
          
          {/* Success Toast Notification */}
          {showSuccess && (
            <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-sm animate-in slide-in-from-top-2">
              <CheckCircle size={18} /> Settings saved successfully!
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Interactive Sidebar Navigation */}
          <div className="md:col-span-1 space-y-1">
            {[
              { id: 'api', label: 'API Integrations', icon: Globe },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'data', label: 'Data Retention', icon: Database },
              { id: 'security', label: 'Security', icon: Shield },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600' 
                    : 'text-slate-600 font-medium hover:bg-slate-100 border-l-4 border-transparent'
                }`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-8 min-h-[400px]">
            
            {/* TAB 1: API Integrations */}
            {activeTab === 'api' && (
              <div className="animate-in fade-in slide-in-from-right-2 duration-300">
                <section className="mb-8">
                  <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4">INCOIS Data Sync</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-slate-700 text-sm">Automated Tsunami Warning Pull</p>
                        <p className="text-xs text-slate-500">Fetch latest bulletins from INCOIS servers</p>
                      </div>
                      {/* Interactive Toggle */}
                      <button 
                        onClick={() => handleChange('autoSync', !formData.autoSync)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.autoSync ? 'bg-blue-600' : 'bg-slate-300'}`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.autoSync ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-slate-600">Sync Interval (Minutes)</label>
                      <input 
                        type="number" 
                        value={formData.syncInterval}
                        onChange={(e) => handleChange('syncInterval', e.target.value)}
                        disabled={!formData.autoSync}
                        className="w-32 p-2 border border-slate-300 rounded-lg outline-none focus:border-blue-500 text-sm disabled:bg-slate-100 disabled:text-slate-400" 
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4">Social Media Monitoring APIs</h2>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-slate-600">Twitter / X Bearer Token</label>
                      <input 
                        type="password" 
                        value={formData.twitterToken}
                        onChange={(e) => handleChange('twitterToken', e.target.value)}
                        className="w-full max-w-md p-2 border border-slate-300 rounded-lg outline-none focus:border-blue-500 text-sm bg-slate-50" 
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-slate-600">NLP Keyword Severity Threshold</label>
                      <select 
                        value={formData.nlpThreshold}
                        onChange={(e) => handleChange('nlpThreshold', e.target.value)}
                        className="w-full max-w-md p-2 border border-slate-300 rounded-lg outline-none focus:border-blue-500 text-sm bg-white"
                      >
                        <option value="High">High (Alert on 10+ matching posts/min)</option>
                        <option value="Medium">Medium (Alert on 5+ matching posts/min)</option>
                        <option value="Low">Low (Log only, no alerts)</option>
                      </select>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* TAB 2: Notifications */}
            {activeTab === 'notifications' && (
              <div className="animate-in fade-in slide-in-from-right-2 duration-300">
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4">Alert Preferences</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">Critical Email Alerts</p>
                      <p className="text-xs text-slate-500">Send immediate emails to admin group</p>
                    </div>
                    <button onClick={() => handleChange('emailAlerts', !formData.emailAlerts)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.emailAlerts ? 'bg-blue-600' : 'bg-slate-300'}`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.emailAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">SMS Emergency Broadcasts</p>
                      <p className="text-xs text-slate-500">Requires Twilio API configuration</p>
                    </div>
                    <button onClick={() => handleChange('smsAlerts', !formData.smsAlerts)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.smsAlerts ? 'bg-blue-600' : 'bg-slate-300'}`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.smsAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3 & 4: Placeholders for Data/Security */}
            {(activeTab === 'data' || activeTab === 'security') && (
              <div className="animate-in fade-in slide-in-from-right-2 duration-300 flex flex-col items-center justify-center h-48 text-slate-400">
                <SettingsIcon size={48} className="mb-4 opacity-50" />
                <p>Configuration panel for {activeTab} will load here.</p>
              </div>
            )}

            {/* Save Button */}
            <div className="pt-8 mt-auto flex justify-end border-t border-slate-100">
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition shadow flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                   <span className="flex items-center gap-2">
                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     Saving...
                   </span>
                ) : 'Save Configurations'}
              </button>
            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}