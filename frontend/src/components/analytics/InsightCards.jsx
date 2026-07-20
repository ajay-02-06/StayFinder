import {
  FaCrown,
  FaMoneyBillWave,
  FaCoins,
} from "react-icons/fa";

function InsightCards({ pgs }) {
  if (pgs.length === 0) return null;

  const highestRated = [...pgs].sort(
    (a, b) => b.rating - a.rating
  )[0];

  const mostExpensive = [...pgs].sort(
    (a, b) => b.price - a.price
  )[0];

  const cheapest = [...pgs].sort(
    (a, b) => a.price - b.price
  )[0];

  const cards = [
    {
      title: "Highest Rated PG",
      value: highestRated.title,
      extra: `⭐ ${highestRated.rating}`,
      color: "bg-yellow-500",
      icon: <FaCrown />,
    },
    {
      title: "Most Expensive",
      value: mostExpensive.title,
      extra: `₹${mostExpensive.price}`,
      color: "bg-red-500",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Cheapest",
      value: cheapest.title,
      extra: `₹${cheapest.price}`,
      color: "bg-green-600",
      icon: <FaCoins />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center"
        >
          <div>

            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className="text-xl font-bold mt-3">
              {card.value}
            </h2>

            <p className="text-lg mt-2 font-semibold">
              {card.extra}
            </p>

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

export default InsightCards;