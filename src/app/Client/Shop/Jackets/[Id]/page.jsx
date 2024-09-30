"use client";

import React, { useState } from "react";

const Jacket = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Medium"); // Default size
  const price = 49.99; // Example price for the jacket
  const description =
    "This stylish jacket is perfect for any occasion. Made with high-quality materials, it offers both comfort and durability.";
  const jacketName = "Stylish Winter Jacket"; // Example jacket name
  const response = fetch("/api/route-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify("objectWithData"),
  });
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${size} jackets to cart.`);
    // Add your cart logic here
  };

  return (
    <div className=" h-full md:h-screen flex justify-center items-center absolute lft-1/2 ight-1/2   w-full">
      <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
      <img
            src={`/${params.Id}.png`}
            alt={`Jacket`}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg "
            />
        <div className="ml-8 py-4 flex flex-col justify-center w-96">
          <h1 className="text-2xl font-bold mb-2">{jacketName}</h1>
          <h2 className="text-md mb-4">
            Price: <span className="underline">${price.toFixed(2)}</span>
          </h2>
          <p className="mb-4">{description}</p>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Size:</label>
            <select
              value={size}
              onChange={handleSizeChange}
              className="border rounded px-4 py-2"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <button
              onClick={decreaseQuantity}
              className="border rounded-l px-4 py-2"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="border rounded-r px-4 py-2"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jacket;






















// "use client";

// import React, { useState } from "react";

// const Jacket = ({ params }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState("Medium"); // Default size
//   const price = 49.99; // Example price for the jacket
//   const description =
//     "This stylish jacket is perfect for any occasion. Made with high-quality materials, it offers both comfort and durability.";
//   const jacketName = "Stylish Winter Jacket"; // Example jacket name

//   const increaseQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   const handleSizeChange = (event) => {
//     setSize(event.target.value);
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${size} jackets to cart.`);
//     // Add your cart logic here
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-full md:h-screen w-full p-4">
//       <div className="flex flex-col md:flex-row md:justify-center md:items-center h-full w-full gap-6 md:gap-12">
//         <img
//           src={`/${params.Id}.png`}
//           alt={`Jacket`}
//           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg "
//         />
//         <div className="flex flex-col justify-center w-full max-w-md">
//           <h1 className="text-xl md:text-2xl font-bold mb-2">{jacketName}</h1>
//           <h2 className="text-md mb-4">
//             Price: <span className="underline">${price.toFixed(2)}</span>
//           </h2>
//           <p className="mb-4">{description}</p>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">Size:</label>
//             <select
//               value={size}
//               onChange={handleSizeChange}
//               className="border rounded px-4 py-2 w-full"
//             >
//               <option value="Small">Small</option>
//               <option value="Medium">Medium</option>
//               <option value="Large">Large</option>
//               <option value="X-Large">X-Large</option>
//             </select>
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center mb-4">
//             <button
//               onClick={decreaseQuantity}
//               className="border rounded-l px-4 py-2"
//             >
//               -
//             </button>
//             <span className="px-4">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="border rounded-r px-4 py-2"
//             >
//               +
//             </button>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="bg-blue-500 text-white py-2 px-4 rounded w-full"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jacket;
