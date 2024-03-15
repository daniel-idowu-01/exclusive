import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import BrowseByCategory from "./components/BrowseByCategory";
import BestSelling from "./components/BestSelling";
import EnhanceXperience from "./components/EnhanceXperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <EnhanceXperience />
    </main>
  );
}
