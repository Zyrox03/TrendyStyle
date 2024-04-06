import { NavBar } from "../../components/NavBar";
import { SideNav } from "../../components/SideNav";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { Title } from "../../widgets/Title";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../toolkit/cartSlice";
import { Helmet } from "react-helmet";
import { CartCheckout } from "../../widgets/CartCheckout";
import OrderSuccess from "../OrderSuccess";

const Cart = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartElements = cartItems;
  useEffect(() => {
    const body = document.querySelector("body");
    if (openSideNav) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [openSideNav]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeItemFromCart = (productSlug) => {
    dispatch(removeItem(productSlug));
  };

  const [orderSuccess, setOrderSuccess] = useState(false);

  if (orderSuccess) {
    return <OrderSuccess />;
  }
  return (
    <div className="min-h-screen bg-slate-300/50 flex flex-col relative overflow-hidden">
      <Helmet>
        <title>Trendy Style - Votre panier </title>
        <meta
          name="description"
          content="Explorez votre panier pour découvrir nos produits tendance pour femmes et enfants. Faites vos achats en toute simplicité !."
        />

        {/* Balises Open Graph pour le partage sur les réseaux sociaux */}
        <meta
          property="og:title"
          content="Trendy Style - Explorez votre panier pour découvrir nos produits tendance pour femmes et enfants. Faites vos achats en toute simplicité !."
        />
        <meta
          property="og:description"
          content="Contactez-nous pour toute question ou préoccupation. Nous sommes là pour vous aider!"
        />

        <meta
          property="og:url"
          content="https://trendy-style.pages.dev/contact"
        />

        {/* Balises Twitter Card pour le partage sur Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trendy Style - Explorez votre panier pour découvrir nos produits tendance pour femmes et enfants. Faites vos achats en toute simplicité !."
        />
        <meta
          name="twitter:description"
          content="Contactez-nous pour toute question ou préoccupation. Nous sommes là pour vous aider!"
        />

        {/* Balises méta supplémentaires */}
        <meta
          name="keywords"
          content="contact, service client, questions, préoccupations"
        />
        <meta name="robots" content="index, follow" />

        {/* Balise meta viewport pour le design responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <NavBar setOpenSideNav={setOpenSideNav} />
      <SideNav setOpenSideNav={setOpenSideNav} openSideNav={openSideNav} />
      <div style={{ marginTop: "6em" }}>
        <Title title="سلة المشتريات" sub_title="عرض وتأكيد الطلبات" />

        <div className="p-2 lg:p-4 lg:p-8 mt-4">
          <div className="w-full lg:px-4 py-8 flex flex-col mt-8 items-end lg:items-end gap-3 ">
             <div className="w-full overflow-x-auto">
             <table className="w-full border-collapse bg-white overflow-x-scroll text-sm lg:text-md">
                <thead>
                  <tr className="bg-purple-600 text-white ">
                    <th className="border border-white-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                      المنتج
                    </th>
                    <th className="border border-white-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                      الكمية
                    </th>
                    <th className="border border-white-300 px-1 lg:px-4 py-1 lg:py-2 text-center">اللون</th>
                    <th className="border border-white-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                      المقاس
                    </th>
                    <th className="border border-white-300 px-1 lg:px-4 py-1 lg:py-2 text-center">السعر</th>
                    <th className="border border-white-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartElements.map((product, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-1 lg:px-4 py-1 lg:py-2 text-center  overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {product.name}
                      </td>
                      <td className="border border-gray-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                        {product.quantity}
                      </td>
                      <td className="border border-gray-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                        {product.color || "غير محدد"}
                      </td>
                      <td className="border border-gray-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                        {product.size || "غير محدد"}
                      </td>
                      <td className="border border-gray-300 px-1 lg:px-4 py-1 lg:py-2 text-center">
                        {product.price} DA
                      </td>
                      <td className="border border-gray-300 flex gap-1 px-1 lg:px-4 py-1 lg:py-2 flex items-center justify-center text-center">
                        <button
                          onClick={() =>
                            removeItemFromCart(product.productSlug)
                          }
                          className="bg-red-500 text-white ml-2 px-2 lg:px-3 py-1 rounded-md"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                        <Link to={`/${product.productSlug}`}>
                          <button className="bg-purple-700 text-white hidden lg:block  px-2 lg:px-3 py-1 rounded-md">
                            <i className="fas fa-pen"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                    
                    </div>   
            {cartElements && cartElements.length > 0 ? (
              <div className="w-full ml-auto mt-4 flex justify-end">
              <CartCheckout setOrderSuccess={setOrderSuccess} />

                          </div>
            ):(
              <div className="w-full text-center bg-gray-200 font-bol" > 
              سلة المشتريات فارغة
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
