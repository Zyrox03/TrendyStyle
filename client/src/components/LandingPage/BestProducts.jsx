import { Link } from "react-router-dom";
import { Button } from "../../widgets/Button";
import { ProductCard } from "../../widgets/ProductCard";
import { Title } from "../../widgets/Title";

import PropTypes from "prop-types";

export const BestProducts = ({ productsList }) => {
  return (
    <div className="flex flex-col items-center gap-12 p-0 lg:p-8" id="best-selling">
      <Title
        title="أفضل المبيعات"
        sub_title="انضموا إلى الأناقة مع اختيارنا الدقيق من أحدث وأكثر الأنماط مبيعًا بعناية"
      />
      {productsList.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-around gap-2 lg:gap-12  w-full p-1 justify-center  ">
          {productsList.slice(0, 3).map((product, index) => (
 <div key={index} className="col-span-1">
 <ProductCard product={product} />
</div>          ))}
        </div>
      ) : (
        <h3 className="text-lg ">لا يوجد أفضل المبيعات</h3>
      )}

      <Link to="/shop">
        <Button text="المزيد" icon="fas fa-plus" />
      </Link>
    </div>
  );
};

BestProducts.propTypes = {
  productsList: PropTypes.array,
};
