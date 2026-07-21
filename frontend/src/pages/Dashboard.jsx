import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MapPlaceholder from "../components/MapPlaceholder";
import PGCard from "../components/PGCard";

import { getAllPGs } from "../services/pgService";

function Dashboard() {
  const [pgs, setPGs] = useState([]);
  const [filteredPGs, setFilteredPGs] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("");
const [selectedAmenity, setSelectedAmenity] = useState("");
const [maxPrice, setMaxPrice] = useState(20000);

  useEffect(() => {
    fetchPGs();
  }, []);
  useEffect(() => {
  handleSearch("");
}, [
  pgs,
  selectedType,
  selectedAmenity,
  maxPrice,
]);

  const fetchPGs = async () => {
    try {
      const data = await getAllPGs();
      setPGs(data.pgs);
      setFilteredPGs(data.pgs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 const handleSearch = (searchText = "") => {
  const filtered = pgs.filter((pg) => {

    const matchesSearch =
      pg.title.toLowerCase().includes(searchText.toLowerCase()) ||
      pg.location.toLowerCase().includes(searchText.toLowerCase());

    const matchesPrice = pg.price <= maxPrice;

    const matchesType =
      selectedType === "" ||
      pg.type === selectedType;

    const matchesAmenity =
      selectedAmenity === "" ||
      pg.amenities.includes(selectedAmenity);

    
    return (
      matchesSearch &&
      matchesPrice &&
      matchesType &&
      matchesAmenity 
      
    );
  });

  setFilteredPGs(filtered);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100">
      <Navbar />

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Hero Section */}
       <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl text-white p-6 md:p-10 mb-8 shadow-xl">

          <div className="text-center">

           <h1 className="text-3xl md:text-5xl font-bold">
              Find Your Perfect PG 🏠
            </h1>

           <p className="mt-4 text-blue-100 text-base md:text-lg">
              Discover comfortable, affordable and verified PGs across Hyderabad.
            </p>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">
              Total PGs
            </h3>

            <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">
              {pgs.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">
              Available
            </h3>

            <p className="text-2xl md:text-3xl font-bold text-green-600 mt-2">
              {
                pgs.filter(
                  (pg) => pg.availability === "Available"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">
              Average Rating
            </h3>

            <p className="text-2xl md:text-3xl font-bold text-yellow-600 mt-2">
              {pgs.length
                ? (
                    pgs.reduce(
                      (sum, pg) => sum + pg.rating,
                      0
                    ) / pgs.length
                  ).toFixed(1)
                : 0}
              ⭐
            </p>
          </div>

        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} />

        {/* Map + Cards */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

  {/* Left Side */}
<div className="space-y-6">


    <MapPlaceholder
      pgs={filteredPGs}
      setUserLocation={setUserLocation}
    />

    

   {/* Quick Filters */}
<div className="bg-white rounded-2xl shadow-lg p-6">

  <h2 className="text-lg md:text-xl font-bold mb-4">
  ⚡ Quick Filters
</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 gap-3">

    <button
      onClick={() =>
        setSelectedType(selectedType === "Boys" ? "" : "Boys")
      }
      className={`rounded-xl py-2 px-2 text-sm md:text-base transition ${
        selectedType === "Boys"
          ? "bg-blue-600 text-white"
          : "bg-blue-100 hover:bg-blue-200"
      }`}
    >
      👦 Boys
    </button>

    <button
      onClick={() =>
        setSelectedType(selectedType === "Girls" ? "" : "Girls")
      }
      className={`rounded-xl py-2 px-2 text-sm md:text-base transition ${
        selectedType === "Girls"
          ? "bg-pink-600 text-white"
          : "bg-pink-100 hover:bg-pink-200"
      }`}
    >
      👧 Girls
    </button>

    <button
      onClick={() =>
        setSelectedType(
          selectedType === "Co-Living" ? "" : "Co-Living"
        )
      }
     className={`rounded-xl py-2 px-2 text-sm md:text-base transition ${
        selectedType === "Co-Living"
          ? "bg-purple-600 text-white"
          : "bg-purple-100 hover:bg-purple-200"
      }`}
    >
      🏠 Co-Living
    </button>

    <button
      onClick={() =>
        setSelectedAmenity(
          selectedAmenity === "WiFi" ? "" : "WiFi"
        )
      }
      className={`rounded-xl py-2 px-2 text-sm md:text-base transition ${
        selectedAmenity === "WiFi"
          ? "bg-green-600 text-white"
          : "bg-green-100 hover:bg-green-200"
      }`}
    >
      📶 WiFi
    </button>

    <button
      onClick={() =>
        setSelectedAmenity(
          selectedAmenity === "AC" ? "" : "AC"
        )
      }
      className={`rounded-xl py-2 px-2 text-sm md:text-base transition ${
        selectedAmenity === "AC"
          ? "bg-cyan-600 text-white"
          : "bg-cyan-100 hover:bg-cyan-200"
      }`}
    >
      ❄️ AC
    </button>

    <button
      onClick={() =>
        setSelectedAmenity(
          selectedAmenity === "Food" ? "" : "Food"
        )
      }
      className={`rounded-xl py-2 px-2 text-sm md:text-base transition ${
        selectedAmenity === "Food"
          ? "bg-orange-600 text-white"
          : "bg-orange-100 hover:bg-orange-200"
      }`}
    >
      🍽️ Food
    </button>

  </div>

</div>
    {/* Price Range */}
<div className="bg-white rounded-2xl shadow-lg p-6">

  <h2 className="text-lg md:text-xl font-bold mb-4">
    💰 Price Range
  </h2>

  <input
  type="range"
  min="3000"
  max="20000"
  step="500"
  value={maxPrice}
  onChange={(e) =>
    setMaxPrice(Number(e.target.value))
  }
  className="w-full accent-blue-600"
/>

  <div className="flex justify-between text-gray-500 mt-3">

  <span>₹3,000</span>

  <span>₹20,000</span>

</div>

<p className="text-center font-bold mt-4 text-blue-600">

Up to ₹{maxPrice}

</p>

</div>

  </div>

  {/* Right Side */}
  <div className="space-y-6">

            {loading ? (
              <p className="text-xl text-center">
                Loading...
              </p>
            ) : filteredPGs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-10 text-center">

                <h2 className="text-3xl font-bold">
                  😕 No PG Found
                </h2>

                <p className="text-gray-500 mt-3">
                  Try another location or increase your budget.
                </p>

              </div>
            ) : (
              filteredPGs.map((pg) => (
                <PGCard
                  key={pg._id}
                  pg={pg}
                  userLocation={userLocation}
                />
              ))
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;