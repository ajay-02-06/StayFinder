import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TypeChart({ pgs }) {
  const boys = pgs.filter((pg) => pg.type === "Boys").length;

  const girls = pgs.filter((pg) => pg.type === "Girls").length;

  const coLiving = pgs.filter(
    (pg) => pg.type === "Co-Living"
  ).length;

  const data = [
    { name: "Boys", value: boys },
    { name: "Girls", value: girls },
    { name: "Co-Living", value: coLiving },
  ];

  const COLORS = ["#3b82f6", "#ec4899", "#f59e0b"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-[420px]">

      <h2 className="text-2xl font-bold mb-6">
        PG Types
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

export default TypeChart;