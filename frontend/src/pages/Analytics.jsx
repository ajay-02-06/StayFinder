import { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

import SummaryCards from "../components/analytics/SummaryCards";
import InsightCards from "../components/analytics/InsightCards";
import AvailabilityChart from "../components/analytics/AvailabilityChart";
import TypeChart from "../components/analytics/TypeChart";
import PriceChart from "../components/analytics/PriceChart";
import RatingChart from "../components/analytics/RatingChart";

import { getAllPGs } from "../services/pgService";

function Analytics() {
  const [pgs, setPGs] = useState([]);

  useEffect(() => {
    fetchPGs();
  }, []);

  const fetchPGs = async () => {
    try {
      const data = await getAllPGs();
      setPGs(data.pgs || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 overflow-x-hidden">

        <Topbar
          title="Analytics"
          subtitle="View business insights"
        />

        <div className="p-4 sm:p-6 lg:p-8">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            📊 Analytics
          </h1>

          <SummaryCards pgs={pgs} />

          <div className="mt-6">
            <InsightCards pgs={pgs} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mt-8">

            <AvailabilityChart pgs={pgs} />

            <TypeChart pgs={pgs} />

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mt-8">

            <PriceChart pgs={pgs} />

            <RatingChart pgs={pgs} />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;