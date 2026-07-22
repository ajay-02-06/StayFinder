import { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

import {
  getAllRequests,
  approveRequest,
  rejectRequest,
} from "../services/requestPGService";

function AdminRequests() {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    try {
      const data = await getAllRequests();
      setRequests(data.requests || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveRequest(id);
      alert("PG Approved Successfully!");
      loadRequests();
    } catch (error) {
      console.log(error);
      alert("Failed to approve PG");
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Reject this request?")) return;

    try {
      await rejectRequest(id);
      alert("Request Rejected");
      loadRequests();
    } catch (error) {
      console.log(error);
      alert("Failed to reject");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Topbar
          title="PG Requests"
          subtitle="Approve or reject host requests"
        />

        <div className="p-4 sm:p-6 lg:p-8">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            PG Requests
          </h1>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="min-w-[850px] w-full">

                <thead className="bg-blue-600 text-white">

                  <tr>
                    <th className="p-4">PG</th>
                    <th className="p-4">Owner</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>

                </thead>

                <tbody>

                  {requests.length > 0 ? (
                    requests.map((pg) => (

                      <tr
                        key={pg._id}
                        className="border-b hover:bg-slate-50 text-center"
                      >

                        <td className="p-4 whitespace-nowrap font-semibold">
                          {pg.title}
                        </td>

                        <td className="p-4 whitespace-nowrap">
                          {pg.ownerName}
                        </td>

                        <td className="p-4 whitespace-nowrap">
                          {pg.ownerPhone}
                        </td>

                        <td className="p-4 whitespace-nowrap">
                          ₹{pg.price}
                        </td>

                        <td className="p-4">

                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            {pg.status}
                          </span>

                        </td>

                        <td className="p-4">

                          <div className="flex justify-center gap-2">

                            <button
                              onClick={() => handleApprove(pg._id)}
                              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() => handleReject(pg._id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                            >
                              Reject
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center py-8 text-gray-500"
                      >
                        No Pending Requests
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminRequests;