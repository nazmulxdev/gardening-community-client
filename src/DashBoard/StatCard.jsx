const StatCard = ({ title, count, color = "gray" }) => {
  const colorMap = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    orange: "bg-orange-100 text-orange-800",
    purple: "bg-purple-100 text-purple-800",
    gray: "bg-gray-100 text-gray-800",
  };

  return (
    <div
      className={`rounded-2xl p-6 shadow-md ${colorMap[color]} border border-opacity-10`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-3xl font-bold">{count}</p>
    </div>
  );
};

export default StatCard;
