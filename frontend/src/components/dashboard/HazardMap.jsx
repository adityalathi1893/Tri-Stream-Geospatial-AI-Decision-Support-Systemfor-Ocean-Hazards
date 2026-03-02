import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Fix for default marker icons in React/Vite
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Mock hazard data along the Tamil Nadu coastline
const hazardReports = [
  { id: 1, lat: 13.0489, lng: 80.2824, location: "Marina Beach", type: "Abnormal Tide", severity: "Warning", verified: true },
  { id: 2, lat: 13.2166, lng: 80.3282, location: "Ennore Port", type: "Storm Surge", severity: "Critical", verified: true },
  { id: 3, lat: 12.6208, lng: 80.1945, location: "Mahabalipuram", type: "High Waves", severity: "Elevated", verified: false },
  { id: 4, lat: 12.8710, lng: 80.1432, location: "Vengadamangalam Coast", type: "Coastal Flooding", severity: "Critical", verified: true },
];

export default function HazardMap() {
  // Centered roughly around the Chennai coastal region
  const mapCenter = [12.95, 80.25];

 return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer 
        center={mapCenter} 
        zoom={10} 
        style={{ height: '400px', width: '100%', zIndex: 10 }}
        scrollWheelZoom={true}
      >
        {/* Switched to standard OpenStreetMap tiles to ensure they aren't blocked */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {hazardReports.map((report) => (
          <Marker key={report.id} position={[report.lat, report.lng]} icon={defaultIcon}>
            <Popup>
              <div>
                <strong>{report.location}</strong><br/>
                {report.type}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}