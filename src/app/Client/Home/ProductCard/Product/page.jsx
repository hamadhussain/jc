import StarRating from "./StarRating/page";

const ProductCard = ({ price,src, title }) => (
  <div  className=" border-gray-200 order rounded-lg p-14 flex flex-col justify-center  items-cente w-fit overflow-hidden ">
    <img id="grad" src={`jacket${src}.png`} alt={title} className="w-96 rounded-lg border-2   h-96 " />
    <div className="p-4 space-y-4 text-">
      <h3 className="text-lg font-semibold">{title}</h3>
      <h3 className="">{price}</h3>
      <StarRating />
    </div>
  </div>
);

export default ProductCard;
