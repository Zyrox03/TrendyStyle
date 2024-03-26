import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
// import { BestProducts } from "../../components/LandingPage/BestProducts";
import { Feature } from "../../components/LandingPage/Feature";
import { Feedback } from "../../components/LandingPage/Feedback";
import { Hero } from "../../components/LandingPage/Hero";
import { ProductsSection } from "../../components/LandingPage/ProductsSection";
import { NavBar } from "../../components/NavBar";
import { useSelector } from "react-redux";
import { SideNav } from "../../components/SideNav";

import { Helmet } from "react-helmet";
import MetaPixel from "../../utils/meta/metaPixel";
import { Star } from "../../widgets/Star";

const LandingPage = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (openSideNav) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [openSideNav]);

  const products = useSelector((state) => state.products.items);

  return (
    <div className="min-h-screen bg-slate-300/50 flex flex-col relative overflow-hidden ">
      <Helmet>
        <title>Trendy Style - Votre Boutique En Ligne</title>
        <meta
          name="description"
          content="Votre boutique en ligne de chaussures - Découvrez les meilleures offres sur nos produits."
        />

        {/* Balises Open Graph pour le partage sur les réseaux sociaux */}
        <meta
          property="og:title"
          content="Trendy Style - Votre Boutique En Ligne"
        />
        <meta
          property="og:description"
          content="Découvrez les meilleures offres sur une large gamme de produits dans notre boutique."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1706972627/Top%20Shoe%20DZ/w8zap4glsiegcrdxk0qq.jpg"
        />
        <meta property="og:url" content="https://topshoes-dz.pages.dev" />

        {/* Balises Twitter Card pour le partage sur Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trendy Style - Votre Boutique En Ligne"
        />
        <meta
          name="twitter:description"
          content="Découvrez les meilleures offres sur une large gamme de produits dans notre boutique."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1706972627/Top%20Shoe%20DZ/w8zap4glsiegcrdxk0qq.jpg"
        />

        {/* Balises méta supplémentaires */}
        <meta
          name="keywords"
          content="ecommerce, offres, shopping en ligne, produits"
        />
        <meta name="robots" content="index, follow" />

        {/* Balise meta viewport pour le design responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <MetaPixel />

      <a
        target="__blank"
        rel="noreferrer"
        href={`https://wa.me/${import.meta.env.VITE_ADMIN_PHONE}`}
      >
        <div
          style={{ zIndex: 2 }}
          className="whatsapp_widget bg-[#25D366] cursor-pointer rounded-full w-[50px] h-[50px] flex items-center justify-center fixed bottom-[25px] lg:bottom-[50px] right-[25px] lg:right-[50px] "
        >
          <i className="text-xl text-white fa-brands fa-whatsapp"></i>
        </div>
      </a>
      <NavBar setOpenSideNav={setOpenSideNav} isLanding />
      <SideNav
        setOpenSideNav={setOpenSideNav}
        openSideNav={openSideNav}
        isLanding
      />

      <div style={{ marginTop: "100px" }} className="px-1">
      <div className="flex justify-center items-center mb-6">
      <form action="/search" method="GET" className="relative w-fit text-center">
  <input
    type="text"
    name="search" 
    placeholder="Search..."
    className="bg-purple-700 text-white placeholder:text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:text-purple-700 transition-colors duration-300 ease-in-out"
  />
  <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2">
    <i className="fa fa-search text-white"></i>
  </button>
</form>

      </div>
        <Hero />
        {/* <BestProducts productsList={products} /> */}
        <ProductsSection productsList={products} />
        <Feature />
        <Feedback />
        <Star />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
