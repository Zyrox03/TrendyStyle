import { Link } from "react-router-dom";
import { Button } from "../../widgets/Button";
import { ProductCard } from "../../widgets/ProductCard";
import { Title } from "../../widgets/Title";
import PropTypes from "prop-types";

export const ProductsSection = ({ productsList }) => {
  return (
    <div className="flex flex-col items-center gap-12 p-0 lg:p-8 mt-4" id="all-products">
      <Title
        title="منتجاتنا"
        sub_title="اكتشفوا الأناقة في كل تفصيل - مجموعة حصرية لكل أسلوب ومناسبة"
      />
      {productsList.length > 0 ? (
        <div className="flex justify-around items-start gap-y-6 w-full flex-wrap">
        {productsList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      ): (
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
