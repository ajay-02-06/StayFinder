import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MapPlaceholder from "../components/MapPlaceholder";
import PGCard from "../components/PGCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-gray-500">
              Find the best PG near you.
            </p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            + Add PG
          </button>

        </div>

        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

          <MapPlaceholder />

          <div className="space-y-4">
            <PGCard />
            <PGCard />
            <PGCard />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;