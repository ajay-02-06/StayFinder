import {
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaRupeeSign,
  FaLayerGroup,
} from "react-icons/fa";

function SummaryCards({ pgs }) {
  const total = pgs.length;

  const available = pgs.filter(
    (pg) => pg.availability === "Available"
  ).length;

  const full = pgs.filter(
    (pg) => pg.availability === "Full"
  ).length;

  const avgRating =
    total > 0
      ? (
          pgs.reduce((sum, pg) => sum + pg.rating, 0) /
          total
        ).toFixed(1)
      : 0;

  const avgPrice =
    total > 0
      ? Math.round(
          pgs.reduce((sum, pg) => sum + pg.price, 0) /
            total
        )
      : 0;

  const totalTypes = new Set(
    pgs.map((pg) => pg.type)
  ).size;

  const cards = [
    {
      title: "Total PGs",
      value: total,
      icon: <FaBuilding />,
      color: "bg-blue-600",
    },
    {
      title: "Available",
      value: available,
      icon: <FaCheckCircle />,
      color: "bg-green-600",
    },
    {
      title: "Full",
      value: full,
      icon: <FaTimesCircle />,
      color: "bg-red-600",
    },
    {
      title: "Avg Rating",
      value: avgRating,
      icon: <FaStar />,
      color: "bg-yellow-500",
    },
    {
      title: "Avg Price",
      value: `₹${avgPrice}`,
      icon: <FaRupeeSign />,
      color: "bg-purple-600",
    },
    {
      title: "PG Types",
      value: totalTypes,
      icon: <FaLayerGroup />,
      color: "bg-cyan-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center hover:shadow-xl transition"
        >
          <div>
            <p className="text-gray-500">{card.title}</p>

            <h2 className="text-4xl font-bold mt-3">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} text-white text-3xl p-5 rounded-2xl`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;