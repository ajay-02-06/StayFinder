import { useEffect, useState } from "react";
import AvailabilityChart from "../components/analytics/AvailabilityChart";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import SummaryCards from "../components/analytics/SummaryCards";
import TypeChart from "../components/analytics/TypeChart";
import { getAllPGs } from "../services/pgService";
import PriceChart from "../components/analytics/PriceChart";
import RatingChart from "../components/analytics/RatingChart";
import InsightCards from "../components/analytics/InsightCards";
function Analytics() {
  const [pgs, setPGs] = useState([]);

  useEffect(() => {
    fetchPGs();
  }, []);

  const fetchPGs = async () => {
    const data = await getAllPGs();
    setPGs(data.pgs);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            📊 Analytics
          </h1>

          <SummaryCards pgs={pgs} />
          <InsightCards pgs={pgs} />
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

  <AvailabilityChart pgs={pgs} />

  <TypeChart pgs={pgs} />

</div>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

    <PriceChart pgs={pgs} />

    <RatingChart pgs={pgs} />

</div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;