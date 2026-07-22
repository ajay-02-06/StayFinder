import { FaEdit, FaTrash } from "react-icons/fa";

function PGTable({
  pgs = [],
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg mt-8 overflow-hidden">

      <div className="p-4 sm:p-6 border-b">
        <h2 className="text-xl sm:text-2xl font-bold">
          Manage PGs
        </h2>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">

        <table className="min-w-[850px] w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>

            </tr>

          </thead>

          <tbody>

            {pgs.length > 0 ? (
              pgs.map((pg) => (

                <tr
                  key={pg._id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  <td className="p-4">
                    <img
                      src={pg.image}
                      alt={pg.title}
                      className="w-20 h-14 object-cover rounded-lg"
                    />
                  </td>

                  <td className="p-4 font-semibold whitespace-nowrap">
                    {pg.title}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    {pg.location}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    ₹{pg.price}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pg.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {pg.availability}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => onEdit(pg)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => onDelete(pg._id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition"
                      >
                        <FaTrash />
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
                  No PGs Available
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PGTable;