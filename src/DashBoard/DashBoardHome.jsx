import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import AuthContext from "../Context/AuthContext";
import StatCard from "./StatCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import DashBoardFooter from "./DashBoardFooter";

const DashBoardHome = () => {
  const [allTipsCount, setAllTipsCount] = useState(0);
  const [myTipsCount, setMyTipsCount] = useState(0);
  const [totalLiked, setTotalLiked] = useState(0);
  const { presentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // All public tips
        const resAll = await fetch(`${baseURL}/gardenersTips/public`);
        const allTips = await resAll.json();
        setAllTipsCount(allTips.length);

        // My tips
        if (presentUser?.email) {
          const resMine = await fetch(
            `${baseURL}/tipsByUser?email=${presentUser.email}`,
          );
          const myTips = await resMine.json();
          setMyTipsCount(myTips.length);

          // Sum all likes of my tips
          const totalLikes = myTips.reduce(
            (sum, tip) => sum + (tip.totalLiked || 0),
            0,
          );
          setTotalLiked(totalLikes);
        }

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [presentUser, baseURL]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Welcome back, {presentUser?.displayName || "Gardener"}! 🌱
      </h1>

      {/* 🔢 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Public Tips"
          count={allTipsCount}
          color="green"
        />
        <StatCard title="My Shared Tips" count={myTipsCount} color="blue" />
        <StatCard
          title="Total Likes On My Tips"
          count={totalLiked}
          color="orange"
        />
        <StatCard title="Account Type" count="Gardener" color="purple" />
      </div>

      {/* 👤 User Profile Card */}
      <div className="mt-10 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-8 border border-gray-200 relative overflow-hidden">
        <div className="absolute -top-5 -right-5 opacity-10 text-[7rem] rotate-12 text-green-300 font-extrabold select-none">
          🌿
        </div>

        {/* Profile Picture */}
        <img
          src={
            presentUser?.photoURL || "https://i.ibb.co/vB4GfRx/default-user.png"
          }
          alt="User"
          className="w-36 h-36 rounded-full object-cover border-4 border-green-300"
        />

        {/* User Details */}
        <div className="text-center md:text-left space-y-2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
            {presentUser?.displayName || "No Name"}
            <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full border border-green-200">
              Gardener
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-gray-700">
            <p>
              <span className="font-medium">📧 Email:</span>{" "}
              {presentUser?.email}
            </p>
            <p>
              <span className="font-medium">🆔 UID:</span> {presentUser?.uid}
            </p>
            <p>
              <span className="font-medium">🔐 Provider:</span>{" "}
              {presentUser?.providerData?.[0]?.providerId || "Unknown"}
            </p>
            <p>
              <span className="font-medium">📅 Joined:</span>{" "}
              {presentUser?.metadata?.creationTime
                ? new Date(
                    presentUser.metadata.creationTime,
                  ).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          {/* Status Row */}
          <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium border border-emerald-200">
              ✅ Verified
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200">
              🔄 Active
            </span>
          </div>
        </div>
      </div>
      {/* Chart section */}
      <div className="mt-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center primaryColor">
          📊 Tip Activity Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { name: "All Tips", value: allTipsCount },
              { name: "My Tips", value: myTipsCount },
              { name: "My Likes", value: totalLiked },
            ]}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              labelStyle={{
                color: "#000",
                fontWeight: "bold",
              }}
            />
            <Bar dataKey="value" fill="#4ade80" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashBoardHome;
