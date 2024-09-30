// import Image from "next/image";
// import Link from "next/link";

// const Header = () => (
//     <div className="h-screen text-white flex flex-col brightness-200 relative -top2 px-36 space-y-4 items-cente justify-center">
//       <h1 className="text-6xl font-bold mb-4 w-[700px] leading-relaxed">
//         Raining Offers For Winter!
//       </h1>
//       <p className="text-3xl mb-4">25% Off On All Products</p><br />
//       <div className="flex space-x-4">
// <Link  href="/Client/Shop">        <button className="bg-white text-black w-fit px-5 py-2 rouned-lg">
//           Shop Now
//         </button></Link>
//         <button className="text-white border-white w-fit px-5 py-2 roundd-lg bg-transparent border">
//           Sales
//         </button>
//       </div>
//   </div>
// );

// export default Header;











import Link from "next/link";

const Header = () => (
  <div className="h-screen overflow-hidden text-white flex flex-col brightness-200 relative px-4 lg:px-36 space-y-4 items-cener justify-center">
    <h1 className="text-4xl md:text-7xl lg:text-8xl w-full md:w-[700px] font-bold mb-4 leading-relaxed text-center md:text-start">
      Raining Offers For Winter!
    </h1>
    <p className="text-2xl md:text-3xl mb-4 text-center md:text-start">25% Off On All Products</p>
    <div className="flex items-center flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
      <Link href="/Client/Shop">
        <button className="bg-white text-black w-fit px-5 py-2 rouned-lg">
          Shop Now
        </button>
      </Link>
      <button className="text-white border-white w-fit px-5 py-2 rouded-lg bg-transparent border">
        Sales
      </button>
    </div>
  </div>
);

export default Header;
