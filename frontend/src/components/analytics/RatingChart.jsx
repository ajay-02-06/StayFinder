import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RatingChart({ pgs }) {
  const data = pgs.map((pg) => ({
    name: pg.title,
    rating: pg.rating,
  }));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-[420px]">

      <h2 className="text-2xl font-bold mb-6">
        Ratings
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis domain={[0, 5]} />

          <Tooltip />

          <Bar
            dataKey="rating"
            fill="#f59e0b"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RatingChart;