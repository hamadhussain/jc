import Link from "next/link";
import ProductCard from "./../../Home/ProductCard/Product/page";

const product = [
  { id: 1, title: "Cool Gadget", price: "$234.56", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 2, title: "Stylish Watch", price: "$123.45", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 3, title: "Amazing Headphones", price: "$89.99", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 4, title: "Innovative Laptop", price: "$450.23", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 5, title: "Durable Backpack", price: "$305.67", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 6, title: "Smartphone Pro", price: "$98.76", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 7, title: "High-Quality Camera", price: "$299.99", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 8, title: "Wireless Mouse", price: "$175.50", linkname: "Client/Shop/Jackets/Jacket" },
  { id: 9, title: "Portable Charger", price: "$30.00", linkname: "Client/Shop/Jackets/Jacket" },
];

const Jackets = () => (
  <section className="p-4 flex justify-center flex-col items-center space- py-24 bg-slate-10">
    <h2 className="text-2xl font-bold  text-center w-fit py-3 border-b-4  border-blue-300 ">
    Jackets Collections
    </h2>
    <div className="grid gap-0 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
      {product.map((product) => (
        <div key={product.id}>
          <ProductCard
            price={product.price}
            title={product.title}
            src={product.id}
            linkname={`${product.linkname}${product.id}`}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Jackets;
