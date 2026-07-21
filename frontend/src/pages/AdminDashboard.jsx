import { useEffect, useState } from "react";
import EditPGModal from "../components/admin/EditPGModal";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import StatsCards from "../components/admin/StatsCards";
import PGTable from "../components/admin/PGTable";
import AddPGModal from "../components/admin/AddPGModal";
import {
  getAllPGs,
  deletePG,
} from "../services/pgService";

function AdminDashboard() {
  const [pgs, setPGs] = useState([]);
  const [selectedPG, setSelectedPG] = useState(null);
const [showEditModal, setShowEditModal] = useState(false);
const [showAddModal, setShowAddModal] = useState(false);
  useEffect(() => {
    fetchPGs();
  }, []);

  const fetchPGs = async () => {
    try {
      const data = await getAllPGs();

      console.log("PG DATA:", data);

      setPGs(data.pgs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this PG?"
    );

    if (!confirmDelete) return;

    try {
      await deletePG(id);

      fetchPGs();

      alert("PG deleted successfully!");
    } catch (error) {
      console.log(error);

      alert("Failed to delete PG");
    }
  };
const handleEdit = (pg) => {
  setSelectedPG(pg);
  setShowEditModal(true);
};
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Topbar
  onAdd={() => setShowAddModal(true)}
  showAddButton={true}
  title="Admin Dashboard"
  subtitle="Manage StayFinder PG Listings"
/>

        <div className="p-8">

          <StatsCards pgs={pgs} />

          <div className="mt-8">

            <PGTable
  pgs={pgs}
  onDelete={handleDelete}
  onEdit={handleEdit}
/>
          </div>

        </div>
        <EditPGModal
  show={showEditModal}
  pg={selectedPG}
  onClose={() => setShowEditModal(false)}
  onUpdate={fetchPGs}
/>
<AddPGModal
  show={showAddModal}
  onClose={() => setShowAddModal(false)}
  onAdd={fetchPGs}
/>
      </div>

    </div>
  );
}

export default AdminDashboard;