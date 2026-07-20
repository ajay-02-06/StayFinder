import { useEffect, useState } from "react";
import { updatePG } from "../../services/pgService";

function EditPGModal({
  show,
  pg,
  onClose,
  onUpdate,
}) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (pg) {
      setForm(pg);
    }
  }, [pg]);

  if (!show || !pg) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async () => {
  try {

    await updatePG(pg._id, form);

    alert("PG Updated Successfully!");

    onUpdate();

    onClose();

  } catch (error) {

    console.log(error);

    alert("Failed to update PG");

  }
};

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-[650px] p-8">

        <h2 className="text-3xl font-bold mb-6">
          Edit PG
        </h2>

        <div className="space-y-4">

          <input
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="location"
            value={form.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="price"
            value={form.price || ""}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-3 rounded-lg"
          />
         <input
  type="number"
  name="rating"
  placeholder="Rating"
  value={form.rating}
  onChange={handleChange}
  className="border p-3 rounded-lg"
/>

<select
  name="type"
  value={form.type}
  onChange={handleChange}
  className="border p-3 rounded-lg"
>
  <option value="Boys">Boys</option>
  <option value="Girls">Girls</option>
  <option value="Co-Living">Co-Living</option>
</select>

<select
  name="availability"
  value={form.availability}
  onChange={handleChange}
  className="border p-3 rounded-lg"
>
  <option value="Available">Available</option>
  <option value="Full">Full</option>
</select>
          <textarea
            name="description"
            value={form.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-3 rounded-lg h-32"
          />

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
  onClick={handleSave}
  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
>
  Save Changes
</button>

        </div>

      </div>

    </div>
  );
}

export default EditPGModal;