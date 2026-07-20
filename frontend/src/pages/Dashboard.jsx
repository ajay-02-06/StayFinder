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

  useEffect(() => {
    fetchPGs();
  }, []);

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

  const handleSearch = (searchText, maxPrice) => {
    const filtered = pgs.filter((pg) => {
      const matchesSearch =
        pg.title.toLowerCase().includes(searchText.toLowerCase()) ||
        pg.location.toLowerCase().includes(searchText.toLowerCase());

      const matchesPrice =
        maxPrice === "" || pg.price <= Number(maxPrice);

      return matchesSearch && matchesPrice;
    });

    setFilteredPGs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl text-white p-10 mb-8 shadow-xl">

          <div className="text-center">

            <h1 className="text-5xl font-bold">
              Find Your Perfect PG 🏠
            </h1>

            <p className="mt-4 text-blue-100 text-lg">
              Discover comfortable, affordable and verified PGs across Hyderabad.
            </p>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">
              Total PGs
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              {pgs.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">
              Available
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
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

            <p className="text-3xl font-bold text-yellow-500 mt-2">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

          <MapPlaceholder
            pgs={filteredPGs}
            setUserLocation={setUserLocation}
          />

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