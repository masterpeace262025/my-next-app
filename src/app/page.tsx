"use client"
import { BlogUi } from "./components/BlogUI";

// Home page
export default function Home() {
  console.log("ID is :", process.env.NEXT_PUBLIC_ID);
  return (
    <div className="px-44 mt-10">
      <BlogUi />
    id is  {process.env.NEXT_PUBLIC_ID}
    </div>
  );
}
  