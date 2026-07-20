import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PGCard from "../components/PGCard";

import { getAllPGs } from "../services/pgService";
import { getWishlist } from "../services/wishlistService";

function Wishlist() {
  const [pgs, setPGs] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const data = await getAllPGs();

    const wishlist = getWishlist();

    const filtered = data.pgs.filter((pg) =>
      wishlist.includes(pg._id)
    );

    setPGs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          ❤️ My Wishlist
        </h1>

        <div className="space-y-6">

          {pgs.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-10 text-center">

              <h2 className="text-3xl">
                No Favourite PGs Yet
              </h2>

            </div>
          ) : (
            pgs.map((pg) => (
              <PGCard
                key={pg._id}
                pg={pg}
              />
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Wishlist;