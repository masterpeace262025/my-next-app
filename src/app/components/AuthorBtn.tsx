"use client";
import { roboto } from "../assect/font/font";
import { IAuthorBtn } from "../type";

// Button Component to show Auhtor name
const AuthorBtn: React.FC<IAuthorBtn> = ({ author }) => {
  const handleAuthorName = (author: string) => {
    alert(`Author is ${author}`);
  };
  return (
    <button
      className={`border-2 p-2 bg-amber-300 ${roboto.className}`}
      onClick={() => handleAuthorName(author)}
    >
      Show author
    </button>
  );
};
export default AuthorBtn;
