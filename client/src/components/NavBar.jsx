import { Button } from "../widgets/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useSelector } from "react-redux";

export const NavBar = ({ setOpenSideNav, isLanding }) => {

  const { specialOffer } = useSelector((state) => state.products);

  return (
    <nav
      style={{
        zIndex: 20,
      }}
      className={`h-[5em] flex justify-between items-center gap-2 px-2 py-3 bg-slate-300 bg-opacity-50 backdrop-blur-md shadow-md fixed w-full transition`}
    >
      <div className="flex gap-1 ">
      <Link className="lg:hidden lg:flex-1 text-black" to="/cart">
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
          <Link className="hidden lg:flex" to="/cart">
            <Button text={<i className="fa-solid fa-shopping-cart"></i>} />{" "}
          </Link>

          <div className="flex gap-1">
            {/* <Button text={<i className="fa-solid fa-shopping-cart"></i>} /> */}
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
