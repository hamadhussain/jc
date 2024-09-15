import ProductCard from "./Product/page";

const product = [
  { id: 1, title: "Cool Gadget", price: "$234.56" },
  { id: 2, title: "Stylish Watch", price: "$123.45" },
  { id: 3, title: "Amazing Headphones", price: "$89.99" },
  { id: 4, title: "Innovative Laptop", price: "$450.23" },
  { id: 5, title: "Durable Backpack", price: "$305.67" },
  { id: 6, title: "Smartphone Pro", price: "$98.76" },
  { id: 7, title: "High-Quality Camera", price: "$299.99" },
  { id: 8, title: "Wireless Mouse", price: "$175.50" },
  { id: 9, title: "Portable Charger", price: "$30.00" },
];

const FeaturedCollections = () => (
  <section className="p-4 flex justify-center flex-col items-center space-y-4 py-24 bg-slate-100">
    <h2 className="text-2xl font-bold mb-4 text-center w-fit py-3 border-b-4  border-blue-300 ">
      Featured Collections
    </h2>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {product.map((product) => (
        <div key={product.id}>
          <ProductCard
            price={product.price}
            title={product.title}
            src={product.id}
          />
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedCollections;
