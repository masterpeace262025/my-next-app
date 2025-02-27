import Image from "next/image";
import { BalogData } from "../data/data";
import Link from "next/link";
// Blog componet
export const BlogUi: React.FC = () => {
  return (
    <div>
      {BalogData.map((blog) => {
        const dec = blog.dec.slice(0, 300);
        return (
          <div key={blog.id} className="flex gap-10 mb-16">
            <div>
              <div className="relative w-[340px] h-[250px]  object-cover  ">
                <Image src={blog.img} alt={blog.title} height={250} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href={`blog/${blog.id}`}
                className="text-4xl font-sans font-semibold"
              >
                {blog.title}
              </Link>
              <div className="font-serif text-lg italic leading-normal font-thin tracking-tight text-slate-500">
                {blog.postDate}
              </div>
              <div className="text-2xl leading-normal font-normal tracking-wide">
                {dec}....
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
