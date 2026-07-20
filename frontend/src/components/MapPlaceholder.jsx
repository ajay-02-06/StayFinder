import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { calculateDistance } from "../utils/distance";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Automatically fit all PG markers
function FitBounds({ pgs }) {
  const map = useMap();

  useEffect(() => {
    if (pgs.length === 0) return;

    const bounds = pgs.map((pg) => [
      pg.latitude,
      pg.longitude,
    ]);

    map.fitBounds(bounds, {
      padding: [50, 50],
    });
  }, [pgs, map]);

  return null;
}

function MapPlaceholder({ pgs, setUserLocation }) {
  const navigate = useNavigate();

  const [userLocation, setLocalUserLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        console.log("User Location:", location);

        setLocalUserLocation(location);

        if (setUserLocation) {
          setUserLocation(location);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <MapContainer
      center={[17.4435, 78.3772]}
      zoom={11}
      style={{
        height: "450px",
        width: "100%",
        borderRadius: "15px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitBounds pgs={pgs} />

      {/* User Marker */}

      {userLocation && (
        <Marker position={userLocation}>
          <Popup>
            📍 You are here
          </Popup>
        </Marker>
      )}

      {/* PG Markers */}

      {pgs.map((pg) => {
        const distance = userLocation
          ? calculateDistance(
              userLocation[0],
              userLocation[1],
              pg.latitude,
              pg.longitude
            )
          : null;

        return (
          <Marker
            key={pg._id}
            position={[pg.latitude, pg.longitude]}
          >
            <Popup>
              <div className="space-y-2">

                <h3 className="font-bold text-lg">
                  {pg.title}
                </h3>

                <p>📍 {pg.location}</p>

                {distance && (
                  <p className="text-gray-500">
                    📏 {distance} km away
                  </p>
                )}

                <p className="text-blue-600 font-semibold">
                  ₹{pg.price}/month
                </p>

                <button
  onClick={() => {
    if (!userLocation) return;

    window.open(
      `https://www.google.com/maps/dir/${userLocation[0]},${userLocation[1]}/${pg.latitude},${pg.longitude}`,
      "_blank"
    );
  }}
  className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700"
>
  🧭 Get Directions
</button>

              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default MapPlaceholder;