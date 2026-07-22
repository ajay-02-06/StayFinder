import { useState } from "react";
import { createPG } from "../../services/pgService";

function AddPGModal({
  show,
  onClose,
  onAdd,
}) {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    rating: "",
    image: "",
    description: "",
    type: "Boys",
    availability: "Available",
    amenities: "",
    latitude: "",
    longitude: "",
  });

  if (!show) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async () => {
    try {
      const pgData = {
        ...form,
        price: Number(form.price),
        rating: Number(form.rating),
        latitude: Number(form.latitude),
        longitude: Number(form.longitude),
        amenities: form.amenities
          .split(",")
          .map((item) => item.trim()),
      };

      await createPG(pgData);

      alert("PG Added Successfully!");

      setForm({
        title: "",
        location: "",
        price: "",
        rating: "",
        image: "",
        description: "",
        type: "Boys",
        availability: "Available",
        amenities: "",
        latitude: "",
        longitude: "",
      });

      onAdd();
      onClose();

    } catch (error) {
      console.log(error);
      alert("Failed to Add PG");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Add New PG
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="latitude"
            placeholder="Latitude"
            value={form.latitude}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="longitude"
            placeholder="Longitude"
            value={form.longitude}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="rating"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2 h-32"
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

          <input
            name="amenities"
            placeholder="WiFi, AC, Food"
            value={form.amenities}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Add PG
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddPGModal;