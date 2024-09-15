import Image from "next/image";
import Link from "next/link";

const Header = () => (
    <div className="h-screen text-white flex flex-col brightness-200 relative -top2 px-36 space-y-4 items-cente justify-center">
      <h1 className="text-6xl font-bold mb-4 w-[700px] leading-relaxed">
        Raining Offers For Winter!
      </h1>
      <p className="text-3xl mb-4">25% Off On All Products</p><br />
      <div className="flex space-x-4">
        <button className="bg-white text-black w-fit px-5 py-2 rouned-lg">
          Shop Now
        </button>
        <button className="text-white border-white w-fit px-5 py-2 roundd-lg bg-transparent border">
          Find More
        </button>
      </div>
  </div>
);

export default Header;
