import DashboardLayout from '../DashboardLayout';
import { Search, MapPin, Tag } from 'lucide-react';

const mockMedia = [
  { id: 1, url: 'https://picsum.photos/seed/ocean1/400/300', location: 'Marina Beach', tag: 'High Waves', verified: true },
  { id: 2, url: 'https://picsum.photos/seed/flood2/400/250', location: 'Vengadamangalam Coast', tag: 'Flooding', verified: false },
  { id: 3, url: 'https://picsum.photos/seed/surge3/400/400', location: 'Ennore Port', tag: 'Storm Surge', verified: true },
  { id: 4, url: 'https://picsum.photos/seed/damage4/400/300', location: 'Mahabalipuram', tag: 'Damage', verified: true },
  { id: 5, url: 'https://picsum.photos/seed/calm5/400/350', location: 'Kanyakumari', tag: 'Normal', verified: false },
  { id: 6, url: 'https://picsum.photos/seed/wave6/400/300', location: 'Besant Nagar', tag: 'High Waves', verified: true },
];

export default function MediaGallery() {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-slate-800">Visual Intelligence Gallery</h1>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by location or AI tag..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
            />
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {mockMedia.map((item) => (
            <div key={item.id} className="break-inside-avoid bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
              <div className="relative">
                <img src={item.url} alt={item.tag} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {item.verified && (
                  <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                    Verified
                  </span>
                )}
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <MapPin size={16} className="text-blue-500" /> {item.location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Tag size={16} className="text-slate-400" /> 
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-bold">
                    AI Tag: {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}