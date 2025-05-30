import React, { useEffect, useState } from "react";

const ActiveUsersDisplay = () => {
  const [activeUsers, setActiveUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/analytics?_=" + Date.now(), {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setActiveUsers(data.activeUsers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div>
      Số người dùng đang hoạt động: <strong>{activeUsers}</strong>
    </div>
  );
};

export default ActiveUsersDisplay;