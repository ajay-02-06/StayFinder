import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getSinglePG } from "../services/pgService";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet Marker Icons
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
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={pg.image}
          alt={pg.title}
          className="w-full h-64 md:h-[420px] object-cover"
        />

        <div className="p-5 md:p-8">

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold">
            {pg.title}
          </h1>

          <p className="text-gray-600 mt-3 text-base md:text-lg">
            📍 {pg.location}
          </p>

          <p className="text-2xl md:text-3xl text-blue-600 font-bold mt-4">
            ₹{pg.price} / month
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-5">

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              {pg.type}
            </span>

            <span
              className={`px-4 py-2 rounded-full ${
                pg.availability === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {pg.availability}
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
              ⭐ {pg.rating}
            </span>

          </div>

          {/* Description */}
          <h2 className="text-xl md:text-2xl font-semibold mt-8">
            Description
          </h2>

          <p className="text-gray-700 mt-3 leading-7">
            {pg.description}
          </p>

          {/* Amenities */}
          <h2 className="text-xl md:text-2xl font-semibold mt-8">
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

          {/* Owner Details */}
         <h2 className="text-xl md:text-2xl font-semibold mt-8">
  Owner Details
</h2>

<div className="mt-4 bg-blue-50 rounded-xl p-5">

  <p className="text-lg mb-3">
    <strong>👤 Owner:</strong> Ajay
  </p>

  <p className="text-lg mb-5">
    <strong>📞 Phone:</strong> +91 9493076135
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

    <a
      href="tel:+919493076135"
      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-center"
    >
      📞 Call Owner
    </a>

    <a
      href="https://wa.me/919493076135"
      target="_blank"
      rel="noreferrer"
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg text-center"
    >
      💬 WhatsApp
    </a>

  </div>

</div>

          {/* Map */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
            Location
          </h2>

          <div className="rounded-xl overflow-hidden shadow-md">

            <MapContainer
              center={[pg.latitude, pg.longitude]}
              zoom={15}
              style={{
                height: "320px",
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

          {/* Google Maps Button */}
          <button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${pg.latitude},${pg.longitude}`,
                "_blank"
              )
            }
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            📍 Open in Google Maps
          </button>

        </div>

      </div>

    </div>
  );
}

export default PGDetails;