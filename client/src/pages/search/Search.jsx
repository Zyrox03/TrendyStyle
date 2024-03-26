import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
   import { NavBar } from "../../components/NavBar";
import { SideNav } from "../../components/SideNav";
import { Title } from "../../widgets/Title";
import { ProductCard } from "../../widgets/ProductCard";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import MetaPixel from "../../utils/meta/metaPixel";
import { useLocation } from "react-router-dom";
const Search = () => {
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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('search');


  const filteredProductList = productsList.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

console.log('filteredProductList',filteredProductList)
  return (
    <div className="min-h-screen bg-slate-300/50 flex flex-col relative overflow-hidden">
      <Helmet>
        <title>Trendy Style - Tous les Produits</title>
        <meta
          name="description"
          content="Votre boutique en ligne de chaussures - Découvrez tous nos produits et profitez des meilleures offres."
        />

        {/* Balises Open Graph pour le partage sur les réseaux sociaux */}
        <meta property="og:title" content="Trendy Style - Tous les Produits" />
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
        <meta name="twitter:title" content="Trendy Style - Tous les Produits" />
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

<MetaPixel/>

      <NavBar setOpenSideNav={setOpenSideNav} />
      <SideNav setOpenSideNav={setOpenSideNav} openSideNav={openSideNav} />
      <div style={{ marginTop: "8em" }}>


      <div className="flex justify-center items-center mb-4">
      <form action="/search" method="GET" className="relative w-fit text-center">
  <input
    type="text"
    defaultValue={search}
    name="search" 
    placeholder="Search..."
    className="bg-purple-700 text-white placeholder:text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:text-purple-700 transition-colors duration-300 ease-in-out"
  />
  <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2">
    <i className="fa fa-search text-white"></i>
  </button>
</form>

      </div>

        <div className="flex flex-col items-center gap-12 p-4 lg:p-8">
          <Title
            title="نتائج البحث"
          />

          {filteredProductList.length > 0 ? (
            <div className="flex justify-around items-center gap-y-6 w-full flex-wrap">
              {filteredProductList.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <h3 className="text-lg "> {search} : لا توجد منتجات بالاسم </h3>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
