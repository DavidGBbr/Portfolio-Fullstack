import Link from "next/link";
import React from "react";
import { HiMiniArrowUpCircle } from "react-icons/hi2";

const BackToTop = () => {
  return (
    <Link href="#/" className="bottom-[5%] right-[2%] fixed border-1 ">
      <HiMiniArrowUpCircle
        size={50}
        className="text-green-700 hover:scale-110 hover:text-green-400 duration-300"
      />
    </Link>
  );
};

export default BackToTop;
