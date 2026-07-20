import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getSinglePG } from "../services/pgService";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function PGDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pg, setPG] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPG();
  }, []);

  const fetchPG = async () => {
    try {
      const data = await getSinglePG(id);
      setPG(data.pg);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading...
      </div>
    );
  }

  if (!pg) {
    return (
      <div className="text-center mt-20 text-2xl">
        PG Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <img
          src={pg.image}
          alt={pg.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-6">

          <h1 className="text-4xl font-bold">
            {pg.title}
          </h1>

          <p className="text-gray-600 mt-3">
            📍 {pg.location}
          </p>

          <p className="text-3xl text-blue-600 font-bold mt-4">
            ₹{pg.price} / month
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            Description
          </h2>

          <p className="text-gray-700 mt-2">
            {pg.description}
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            Amenities
          </h2>

          <div className="flex flex-wrap gap-3 mt-4">
            {pg.amenities.map((item, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
  Location
</h2>

<div className="rounded-xl overflow-hidden shadow-md">
  <MapContainer
    center={[pg.latitude, pg.longitude]}
    zoom={15}
    style={{
      height: "350px",
      width: "100%",
    }}
  >
    <TileLayer
      attribution="&copy; OpenStreetMap contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={[pg.latitude, pg.longitude]}>
      <Popup>
        <strong>{pg.title}</strong>
        <br />
        {pg.location}
      </Popup>
    </Marker>
  </MapContainer>
</div>

        </div>

      </div>

    </div>
  );
}

export default PGDetails;