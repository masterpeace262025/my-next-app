import Image from "next/image";
import { IProfile } from "../type";
// Profile component
export const Profile: React.FC<IProfile> = ({ HeaderImage }) => {
  return (
    <div className="flex items-center justify-center w-full mt-16">
      <div className="flex flex-col items-center text-center border-b border-slate-200 px-6 pb-10 max-w-lg">
        <Image
          src={HeaderImage}
          alt="Margaret Smith"
          width={144}
          className="rounded-full shadow-md"
          priority
        />

        <div className="text-4xl mt-6 font-semibold text-slate-800 tracking-tight">
          Margaret Smith
        </div>

        <div className="mt-3 text-2xl italic text-slate-500 leading-relaxed">
          Writer at The Daily Times, spending all my free time writing stories.
        </div>
      </div>
    </div>
  );
};
