import DashboardLayout from '../DashboardLayout';
import { AlertTriangle, TrendingUp } from 'lucide-react';

export default function SocialMonitoring() {
  const mockTweets = [
    { id: 1, user: '@coastguard_tn', text: 'Abnormal wave heights observed near Mahabalipuram shore. #TsunamiIndia #TNWeather', sentiment: 'Panic', time: '2 mins ago' },
    { id: 2, user: '@chennai_updates', text: 'Water receding rapidly at Marina Beach. Is this normal? Everyone is running.', sentiment: 'Critical', time: '5 mins ago' },
    { id: 3, user: '@weather_nerd', text: 'INCOIS data showing standard high tide, no need to panic yet folks.', sentiment: 'Neutral', time: '12 mins ago' },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <TrendingUp className="text-blue-600" /> Social Media Intelligence
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-semibold text-slate-600 uppercase tracking-wide text-sm">Live NLP Feed</h2>
            {mockTweets.map(tweet => (
              <div key={tweet.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-blue-900">{tweet.user}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    tweet.sentiment === 'Critical' ? 'bg-red-100 text-red-700' : 
                    tweet.sentiment === 'Panic' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {tweet.sentiment}
                  </span>
                </div>
                <p className="text-slate-700 text-lg">{tweet.text}</p>
                <span className="text-xs text-slate-400">{tweet.time}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
             <div className="bg-slate-900 rounded-xl p-5 text-white shadow-lg">
                <h3 className="font-bold mb-4 flex items-center gap-2"><AlertTriangle className="text-red-500"/> Trending Hazards</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center"><span className="text-slate-300">#StormSurge</span> <span className="text-red-400 font-bold">↑ 450%</span></div>
                  <div className="flex justify-between items-center"><span className="text-slate-300">#ChennaiRain</span> <span className="text-orange-400 font-bold">↑ 210%</span></div>
                  <div className="flex justify-between items-center"><span className="text-slate-300">#Evacuation</span> <span className="text-yellow-400 font-bold">↑ 85%</span></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}