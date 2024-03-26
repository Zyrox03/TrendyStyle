import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  //   GET DISCOUNT

  let deduction = 0;
  deduction = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
  return (
    <Link
      to={`/${product.slug}`}
      className="flex flex-col justify-between w-[47%] lg:w-[20em] gap-4 lg:h-full bg-slate-100 rounded-lg relative shadow-lg"
      dir="rtl"
    >
      <div className="overflow-hidden rounded-lg relative ">
        {/* discount tag */}

        {deduction > 0 && (
          <div className="bg-purple-800 text-white w-fit absolute bottom-2 right-2 px-2 font-bold rounded-lg z-10">
           وفر {deduction}% 
          </div>
        )}
        <img
          src={
            product.images[0]?.image?.path ||
            "https://content.optimumnutrition.com/i/on/C100969_Image_01?layer0=$PDP$"
          }
          alt="product image"
          className="w-full h-[250px]  lg:h-[350px] object-cover hover:scale-105 duration-300 transition"
        />
      </div>

      <div className="flex flex-col gap-2  pb-4 px-4 ">


      <h2 className="text-md lg:text-xl font-bold text-center px-4 ">{product.name}</h2>
      
      <p className="lg:text-2xl font-bold text-center flex flex-col ">
        {product.oldPrice && (
          <span className="text-sm font-normal line-through">
            DA {product.oldPrice}
          </span>
        )}
        {" "}
        <span className="text-purple-700">DA {product.price} </span>

      </p>

      <button className="w-full flex items-center justify-center gap-4 lg:gap-8 bg-purple-800 text-white rounded-lg p-2 hover:bg-purple-900 transition active:scale-95">
        <p className="text-xs lg:text-lg font-bold">انظر</p>
        <i className="text-md fa-solid fa-eye bg-purple-700 px-4 py-2 rounded-lg"></i>
      </button>
      </div>
    </Link>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};
