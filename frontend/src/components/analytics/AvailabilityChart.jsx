import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AvailabilityChart({ pgs }) {
  const available = pgs.filter(
    (pg) => pg.availability === "Available"
  ).length;

  const full = pgs.filter(
    (pg) => pg.availability === "Full"
  ).length;

  const data = [
    {
      name: "Available",
      value: available,
    },
    {
      name: "Full",
      value: full,
    },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-[420px]">

      <h2 className="text-2xl font-bold mb-6">
        PG Availability
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default AvailabilityChart;