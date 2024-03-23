import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import BrowseByCategory from "./components/BrowseByCategory";
import BestSelling from "./components/BestSelling";
import EnhanceXperience from "./components/EnhanceXperience";
import ExploreProducts from "./components/ExploreProducts";
import NewArrival from "./components/NewArrival";
import FeaturesComp from "./components/FeaturesComp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <EnhanceXperience />
      <ExploreProducts />
      <NewArrival />
      <FeaturesComp />
      <Footer />
    </main>
  );
}
