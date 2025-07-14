import Pagination from "./components/Pagination";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 relative justify-center items-center mt-16">
      <Search />
      <ProductsList />
      <Pagination />
    </main>
  );
}
