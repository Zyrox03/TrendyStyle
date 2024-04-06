import { Link } from "react-router-dom";
import { Button } from "../../widgets/Button";
import { ProductCard } from "../../widgets/ProductCard";
import { Title } from "../../widgets/Title";
import PropTypes from "prop-types";

export const ProductsSection = ({ productsList }) => {
  return (
    <div
      className="flex flex-col  items-center gap-12 p-0 lg:p-8 mt-4"
      id="all-products"
    >
      <Title
        title="منتجاتنا"
        sub_title="اكتشفوا الأناقة في كل تفصيل - مجموعة حصرية لكل أسلوب ومناسبة"
      />
      {productsList.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-around gap-2 lg:gap-12  w-full p-1 justify-center  ">
            {productsList.map((product, index) => (
              <div key={index} className="col-span-1">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
      ) : (
        <h3 className="text-lg ">المتجر فارغ في الوقت الحالي</h3>
      )}
      <Link to="/shop">
        <Button text="المزيد" icon="fas fa-plus" />
      </Link>{" "}
    </div>
  );
};

ProductsSection.propTypes = {
  productsList: PropTypes.array,
};
