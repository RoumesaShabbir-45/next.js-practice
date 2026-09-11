"use client";
import { error } from "console";
import { useState, useEffect } from "react";
export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch('/api/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
    setData(data);
  })
    .catch(err => console.error(err));
}, []);

return (
  <div style={{ padding: 20 }}>
    <h1>Dashboard</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
}