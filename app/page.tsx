import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import BrowseByCategory from "./components/BrowseByCategory";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSales />
      <BrowseByCategory />
    </main>
  );
}
