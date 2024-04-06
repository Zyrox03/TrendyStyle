import { Button } from "../widgets/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useSelector } from "react-redux";

export const NavBar = ({ setOpenSideNav, isLanding }) => {
  const { specialOffer } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav
      style={{
        zIndex: 20,
      }}
      className={`h-[5em] flex justify-between items-center gap-2 px-2 py-3 bg-white  shadow-md fixed w-full transition`}
    >
      <div className="flex gap-1 ">
        <Link className="lg:hidden lg:flex-1 text-black relative" to="/cart">
          {cartItems && cartItems.length > 0 && (
            <div
              className="bg-red-500 opacity-100  absolute bottom-[70%] left-[70%] rounded-full flex jusitfy-center items-center "
              style={{ zIndex: 2 }}
            >
              <span className="text-white w-5 h-5 rounded-full text-center">
                {cartItems.length}{" "}
              </span>
            </div>
          )}

          <Button text={<i className="fa-solid fa-shopping-cart"></i>} />
        </Link>
      </div>
      <div className=" lg:flex-2  w-[80px] lg:w-[100px] ">
        {isLanding ? (
          <LinkScroll to={"hero"} spy={true} smooth={true} offset={-180}>
            <img
              src="/logo.png"
              className="w-full cursor-pointer rounded-lg"
              alt="store logo"
            />
          </LinkScroll>
        ) : (
          <Link to="/">
            <img
              src="/logo.png"
              className="w-full cursor-pointer rounded-lg"
              alt="store logo"
            />
          </Link>
        )}
      </div>
      <ul className="hidden lg:flex items-center gap-12  flex-row-reverse justify-center flex-1 w-full">
        {isLanding ? (
          <LinkScroll to={"hero"} spy={true} smooth={true} offset={-180}>
            <li className="hover:text-purple-700 cursor-pointer font-bold transition">
              الصفحة الرئيسية
            </li>
          </LinkScroll>
        ) : (
          <Link to="/">
            <li className="hover:text-purple-700 cursor-pointer font-bold transition">
              الصفحة الرئيسية
            </li>
          </Link>
        )}

        <Link to="/category/femmes">
          <li className="hover:text-purple-700 cursor-pointer font-bold transition">
            قسم النساء
          </li>
        </Link>
        <Link to="/category/enfants">
          <li className="hover:text-purple-700 cursor-pointer font-bold transition">
            قسم الاطفال
          </li>
        </Link>

        {specialOffer &&
          (isLanding ? (
            <LinkScroll
              to={"feature"}
              spy={true}
              smooth={true}
              offset={-180}
              onClick={() => setOpenSideNav(false)}
            >
              <li className="hover:text-purple-700 cursor-pointer font-bold transition">
                عرض خاص
              </li>
            </LinkScroll>
          ) : (
            <Link to="/">
              <li className="hover:text-purple-700 cursor-pointer font-bold transition">
                عرض خاص
              </li>
            </Link>
          ))}

        <Link to="/contact">
          <li className="hover:text-purple-700 cursor-pointer font-bold transition">
            اتصل بنا
          </li>
        </Link>
      </ul>

      <div className="flex items-center flex-2">
        <div className="ml-auto  flex gap-2 text-black">
          <Link className="hidden lg:flex  relative" to="/cart">
            {cartItems && cartItems.length > 0 && (
              <div
                className="bg-red-500 opacity-100  absolute bottom-[70%] left-[70%] rounded-full flex jusitfy-center items-center "
                style={{ zIndex: 2 }}
              >
                <span className="text-white w-5 h-5 rounded-full text-center">
                  {cartItems.length}{" "}
                </span>
              </div>
            )}
            <Button text={<i className="fa-solid fa-shopping-cart"></i>} />{" "}
          </Link>

          <div className="flex gap-1">
            <div className=" lg:hidden" onClick={() => setOpenSideNav(true)}>
              <Button text={<i className="fa-solid fa-bars"></i>} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setOpenSideNav: PropTypes.func.isRequired,
  isLanding: PropTypes.bool,
};
