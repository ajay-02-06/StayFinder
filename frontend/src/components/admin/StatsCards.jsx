import {
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
} from "react-icons/fa";

function StatsCards({ pgs }) {
  console.log("StatsCards:", pgs);

  const total = pgs.length;

  const available = pgs.filter(
    (pg) => pg.availability === "Available"
  ).length;

  const occupied = total - available;

  const avgRating =
    total > 0
      ? (
          pgs.reduce((sum, pg) => sum + pg.rating, 0) /
          total
        ).toFixed(1)
      : 0;

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
      value: occupied,
      icon: <FaTimesCircle />,
      color: "bg-red-600",
    },
    {
      title: "Average Rating",
      value: avgRating,
      icon: <FaStar />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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

export default StatsCards;