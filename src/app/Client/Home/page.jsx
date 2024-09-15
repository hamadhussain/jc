"use client";
import { useState, useEffect } from "react";
import HeroSection from "./HeroSection/page";
import FeaturedCollections from "./ProductCard/page";
import Footer from "./Footer/page";
import { GiSleevelessJacket } from "react-icons/gi";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Header from "./Header/page";

export default function Home() {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(true);
    }, 1000);
  }, []);
  return (
    <div className=" ">
      {/* <div className="body  ">
        <div
          className={`absolute inset-0 bg-black transition-all duration-700 ${
            message ? "  bg-opacity-50" : " bg-opacity-10"
          }`}
        ></div>

        <header className="flex backdrop-brightness-95 py-10  text-white z-20 bg-hite bg-fixd ixed w-scren items-center justify-between  px-6 bg-whi border-ray-200">
          <div className=" gap-11 flex items-center">
            <div className="flex items-center italic gap-1 text-3xl">
              <GiSleevelessJacket className=" border-4 rounded-full" />
              <p className="companylogo italic">M.J</p>
            </div>
            <nav className="hidden md:flex space-x-16">
              <Link href="/jewelry">Jackets For Men</Link>
              <Link href="/clothing">Jackets For Women</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <Link className=" " href="/about">
              <FcAbout className=" text-3xl " />
            </Link>
            <Link className=" " href="/contact">
              <GrContact className=" text-3xl " />
            </Link>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full p-2 pl-3 bg-white border-none focus:outline-none"
            />{" "}
            <CiSearch className=" text-6xl " />
            <button
              // onClick={onClick}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </header>
        <div className="">
          <div className=" text-white  z">
            <div className=" h-screen">
              <h1 className="">Raining Offers For Hot Summer!</h1>
              <p>
                25% Off On All Products
                <div>
                  <button className="bg-white text-black w-fit px-5 py-2">
                    Shop Now
                  </button>{" "}
                  <button className="text-white text-back border-white w-fit px-5 py-2">
                    Find More
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="body flex justify-around items- flex-col">
        <div
          className={`absolute inset-0 bg-black transition-all duration-700 ${
            message ? "bg-opacity-50" : "bg-opacity-10"
          }`}
        ></div>
        <header className="flex backdrop-brightness-95 py-10 text-white z-20 bg-whte bg-fxed fied w-scree items-center justify-between px-6 border-gray-200">
          <div className="gap-11 flex items-center">
            <div className="flex items-center italic gap-1 text-3xl">
              <GiSleevelessJacket className="border-4 rounded-full" />
              <p className="companylogo italic">M.J</p>
            </div>
            <nav className="hidden md:flex space-x-12 uppercase">
              <Link className=" transition-all duration-75 hover:opacity-85  border-0 hover:border-b-2" href="/jewelry"> For Men</Link>
              <Link className=" transition-all duration-75 hover:opacity-85  border-0 hover:border-b-2" href="/clothing"> For Women</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <Link className="" href="/about">
              <FcAbout className="text-4xl" />
            </Link>
            <Link className="" href="/contact">
              <GrContact className="text-3xl" />
            </Link>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full p-2 pl-3 rounded-md bg-white border-none focus:outline-none"
            />
            <CiSearch className="text-6xl" />
            <button
              // onClick={onClick}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </header>
        <Header />
      </div>

      <div className=" bg-slate-50 z-10">
        <HeroSection />
        <FeaturedCollections />
        <Footer />
      </div>
    </div>
  );
}
