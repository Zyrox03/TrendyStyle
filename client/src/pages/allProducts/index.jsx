import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Feedback } from "../../components/LandingPage/Feedback";
import { NavBar } from "../../components/NavBar";
import { SideNav } from "../../components/SideNav";
import { Title } from "../../widgets/Title";
import { ProductCard } from "../../widgets/ProductCard";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import MetaPixel from "../../utils/meta/metaPixel";
import { useParams } from "react-router-dom";
const AllProducts = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const productsList = useSelector((state) => state.products.items);

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

  // category

  const { category } = useParams();
  console.log("category", category);

  let filteredProductList;

  if (!category) {
    filteredProductList = productsList;
  } else {
    if (category === "femmes") {
      filteredProductList = productsList.filter(
        (product) => product.category === "femmes"
      );
    } else if (category === "enfants") {
      filteredProductList = productsList.filter(
        (product) => product.category === "enfants"
      );
    } else {
      filteredProductList = productsList;
    }
  }

  console.log("filteredProductList", filteredProductList);
  return (
    <div className="min-h-screen bg-slate-300/50 flex flex-col relative overflow-hidden">
      <Helmet>
        <title>
          Trendy Style -{" "}
          {!category
            ? "Tous les Produits"
            : category === "femmes"
            ? "Section Femmes"
            : "Section Enfants"}{" "}
        </title>

        <meta
          name="description"
          content="Votre boutique en ligne de chaussures - Découvrez tous nos produits et profitez des meilleures offres."
        />

        {/* Balises Open Graph pour le partage sur les réseaux sociaux */}
        <meta
          property="og:title"
          content={`Trendy Style - ${
            !category
              ? "Tous les Produits"
              : category === "femmes"
              ? "Section Femmes"
              : "Section Enfants"
          } `}
        />
        <meta
          property="og:description"
          content="Découvrez tous nos produits et profitez des meilleures offres dans notre boutique en ligne de chaussures."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1706972627/Top%20Shoe%20DZ/w8zap4glsiegcrdxk0qq.jpg"
        />
        <meta property="og:url" content="https://trendy-style.pages.dev/shop" />

        {/* Balises Twitter Card pour le partage sur Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Trendy Style - ${
            !category
              ? "Tous les Produits"
              : category === "femmes"
              ? "Section Femmes"
              : "Section Enfants"
          } `}
        />
        <meta
          name="twitter:description"
          content="Découvrez tous nos produits et profitez des meilleures offres dans notre boutique en ligne de chaussures."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1706972627/Top%20Shoe%20DZ/w8zap4glsiegcrdxk0qq.jpg"
        />

        {/* Balises méta supplémentaires */}
        <meta
          name="keywords"
          content="ecommerce, offres, shopping en ligne, chaussures"
        />
        <meta name="robots" content="index, follow" />

        {/* Balise meta viewport pour le design responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <MetaPixel />

      <NavBar setOpenSideNav={setOpenSideNav} />
      <SideNav setOpenSideNav={setOpenSideNav} openSideNav={openSideNav} />
      <div style={{ marginTop: "5em" }}>
        <div className="flex flex-col items-center gap-12 p-0 lg:p-8 mt-4">
          <Title
            title={`${
              !category
                ? "منتجاتنا"
                : category === "femmes"
                ? "قسم النساء"
                : "قسم الاطفال"
            }`}
            sub_title={`${
              !category
                ? "اكتشفوا الأناقة في كل تفصيل - مجموعة حصرية لكل أسلوب ومناسبة"
                : category === "femmes"
                ? "تألقي بأناقة لا مثيل لها - تشكيلة فريدة تتناسب مع جمالك الفريد ومختلف مناسباتك"
                : "مجموعة مميزة تجعل كل يوم مغامرة جديدة للأطفال"
            }`}
          />

          {filteredProductList.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-around gap-2 lg:gap-12  w-full p-1 justify-center  ">
              {filteredProductList.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <h3 className="text-lg ">
              {!category
                ? "المتجر"
                : category === "femmes"
                ? "قسم النساء"
                : "قسم الاطفال"}{" "}
              فارغ في الوقت الحالي
            </h3>
          )}
        </div>
      </div>
      <Feedback />
      <Footer />
    </div>
  );
};

export default AllProducts;
