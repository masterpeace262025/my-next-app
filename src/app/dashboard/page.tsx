"use client";
import Script from "next/script";

// dashboard component
const Dashboard: React.FC = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
      Dashboard
    </div>
  );
};
export default Dashboard;
