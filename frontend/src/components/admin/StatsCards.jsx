import {
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
} from "react-icons/fa";

function StatsCards({ pgs = [] }) {
  console.log("StatsCards:", pgs);

  const total = pgs.length;

  const available = pgs.filter(
    (pg) => pg.availability === "Available"
  ).length;

  const occupied = total - available;

  const avgRating =
    total > 0
      ? (
          pgs.reduce((sum, pg) => sum + (pg.rating || 0), 0) /
          total
        ).toFixed(1)
      : "0.0";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition-all duration-300"
        >

          <div className="min-w-0">
            <p className="text-gray-500 text-sm sm:text-base">
              {card.title}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 break-words">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} text-white text-xl sm:text-2xl lg:text-3xl p-4 sm:p-5 rounded-2xl flex-shrink-0`}
          >
            {card.icon}
          </div>

        </div>
      ))}

    </div>
  );
}

export default StatsCards;