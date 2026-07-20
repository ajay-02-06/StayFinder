import { FaEdit, FaTrash } from "react-icons/fa";

function PGTable({
  pgs,
  onDelete,
  onEdit,
}){
  return (
    <div className="bg-white rounded-2xl shadow-lg mt-8 overflow-hidden">

      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Manage PGs
        </h2>
      </div>

      <table className="w-full">

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

          {pgs.map((pg) => (

            <tr
              key={pg._id}
              className="border-b hover:bg-slate-50"
            >

              <td className="p-4">
                <img
                  src={pg.image}
                  alt={pg.title}
                  className="w-20 h-14 object-cover rounded-lg"
                />
              </td>

              <td className="p-4 font-semibold">
                {pg.title}
              </td>

              <td className="p-4">
                {pg.location}
              </td>

              <td className="p-4">
                ₹{pg.price}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full ${
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
  className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600"
>
  <FaEdit />
</button>

                  <button
                    onClick={() => onDelete(pg._id)}
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PGTable;