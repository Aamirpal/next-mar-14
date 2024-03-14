"use client";
// pages/dashboard.js
import { isAuthenticated } from "../../lib/auth";
import { redirect } from "next/navigation";

export default function Dashboard() {
  if (!isAuthenticated()) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard content goes here */}
    </div>
  );
}
