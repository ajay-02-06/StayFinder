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
      setRequests(data.requests);
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

        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            PG Requests
          </h1>

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4">PG</th>
                  <th>Owner</th>
                  <th>Phone</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {requests.map((pg) => (

                  <tr
                    key={pg._id}
                    className="border-b text-center"
                  >

                    <td className="p-4">
                      {pg.title}
                    </td>

                    <td>
                      {pg.ownerName}
                    </td>

                    <td>
                      {pg.ownerPhone}
                    </td>

                    <td>
                      ₹{pg.price}
                    </td>

                    <td>

                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                        {pg.status}

                      </span>

                    </td>

                    <td className="space-x-2">

                      <button
                        onClick={() => handleApprove(pg._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(pg._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Reject
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminRequests;