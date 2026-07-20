import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaWifi, FaSnowflake, FaUtensils, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { calculateDistance } from "../utils/distance";
import {
  addToWishlist,
  removeFromWishlist,
  isFavourite,
} from "../services/wishlistService";
function PGCard({ pg, userLocation }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(
  isFavourite(pg._id)
);
const distance =
  userLocation
    ? calculateDistance(
        userLocation[0],
        userLocation[1],
        pg.latitude,
        pg.longitude
      )
    : null;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="relative">

        <img
          src={pg.image}
          alt={pg.title}
          className="w-full h-56 object-cover"
        />

        <button
  onClick={() => {
    if (liked) {
      removeFromWishlist(pg._id);
    } else {
      addToWishlist(pg._id);
    }

    setLiked(!liked);
  }}
  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
>
  <FaHeart
    className={
      liked
        ? "text-red-600"
        : "text-gray-400"
    }
  />
</button>

        <span className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ₹{pg.price}/month
        </span>

      </div>

      {/* Content */}

      <div className="p-5">

        <div className="flex justify-between items-center">

  <h2 className="text-2xl font-bold">
    {pg.title}
  </h2>

  <div className="flex items-center gap-1 text-yellow-500 font-semibold">
    <FaStar />
    {pg.rating}
  </div>

</div>

        <div className="flex items-center gap-2 mt-2 text-gray-500">

          <FaMapMarkerAlt />

          <span>{pg.location}</span>

        </div>
       <div className="flex gap-2 mt-3">

  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
    {pg.type}
  </span>

  <span
    className={`px-3 py-1 rounded-full text-sm ${
      pg.availability === "Available"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {pg.availability}
  </span>

</div>
        <p className="text-gray-600 mt-4 line-clamp-2">
          {pg.description}
        </p>
        {distance && (
  <p className="text-sm text-gray-500 mt-1">
    📏 {distance} km away
  </p>
)}
        {/* Amenities */}

        <div className="flex flex-wrap gap-2 mt-5">

          {pg.amenities.includes("WiFi") && (
            <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-full">
              <FaWifi />
              WiFi
            </span>
          )}

          {pg.amenities.includes("AC") && (
            <span className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-2 rounded-full">
              <FaSnowflake />
              AC
            </span>
          )}

          {pg.amenities.includes("Food") && (
            <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-2 rounded-full">
              <FaUtensils />
              Food
            </span>
          )}

        </div>
<div className="mt-5 space-y-3">

  <button
    onClick={() => navigate(`/pg/${pg._id}`)}
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
  >
    View Details
  </button>

  <button
    onClick={() => {
      if (!userLocation) return;

      window.open(
        `https://www.google.com/maps/dir/${userLocation[0]},${userLocation[1]}/${pg.latitude},${pg.longitude}`,
        "_blank"
      );
    }}
    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
  >
    🧭 Get Directions
  </button>

</div>

      </div>

    </div>
  );
}

export default PGCard;