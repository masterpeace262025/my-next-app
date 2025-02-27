import { BalogData } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";

// Blog Detail page
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const currentBlog = BalogData.filter((item) => item.id === Number(slug));
  debugger; // Execution will pause here


  return (
    <div className="container mx-auto px-4 py-12">
      {currentBlog.map((item) => (
        <div key={item.id} className="space-y-6">
          <div className="text-4xl font-bold text-center text-gray-800">
            {item.title}
          </div>
          <div className="text-center text-sm text-gray-500">
            {item.postDate}
          </div>
          <div className="flex gap-10 items-center">
            <Image src={item.img} alt={item.title} width={800} />
            <div>
              <div className="mt-8 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {item.dec}
              </div>

              <div className="flex justify-center mt-12">
                <Link
                  href="/"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Back to Blog List
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Blog Detail page",
    description: "Blog Detail page",
  };
}
