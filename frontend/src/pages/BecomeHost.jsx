import { useState } from "react";
import { submitRequest } from "../services/requestPGService";

function BecomeHost() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    ownerName: "",
    ownerPhone: "",
    latitude: "",
    longitude: "",
    price: "",
    rating: "",
    image: "",
    description: "",
    type: "Boys",
    availability: "Available",
    amenities: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
  // Empty field validation
  if (
    !form.title ||
    !form.location ||
    !form.ownerName ||
    !form.ownerPhone ||
    !form.latitude ||
    !form.longitude ||
    !form.price ||
    !form.rating ||
    !form.image ||
    !form.description ||
    !form.amenities
  ) {
    alert("Please fill all fields.");
    return;
  }

  // Phone validation
  if (!/^[0-9]{10}$/.test(form.ownerPhone)) {
    alert("Enter a valid 10-digit phone number.");
    return;
  }

  try {
    await submitRequest({
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
      latitude: Number(form.latitude),
      longitude: Number(form.longitude),
      amenities: form.amenities
        .split(",")
        .map((item) => item.trim()),
    });

    alert("PG Request Submitted Successfully!");

    setForm({
      title: "",
      location: "",
      ownerName: "",
      ownerPhone: "",
      latitude: "",
      longitude: "",
      price: "",
      rating: "",
      image: "",
      description: "",
      type: "Boys",
      availability: "Available",
      amenities: "",
    });
  } catch (error) {
    console.log(error);

    if (
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      alert(error.response.data.message);
    } else {
      alert("Failed to submit request.");
    }
  }
};

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-10">

      <div className="bg-white w-[850px] rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Become a Host
        </h1>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="title"
            placeholder="PG Title"
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
            name="ownerName"
            placeholder="Owner Name"
            value={form.ownerName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="ownerPhone"
            placeholder="Owner Phone Number"
            value={form.ownerPhone}
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
            className="border p-3 rounded-lg col-span-2"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-3 rounded-lg col-span-2 h-32"
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
            className="border p-3 rounded-lg col-span-2"
          />

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Submit Request
          </button>

        </div>

      </div>

    </div>
  );
}

export default BecomeHost;