import Pagination from "./components/Pagination";
import ProductsList from "./components/ProductsList";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 relative grow justify-center items-center mt-16">
      <ProductsList />
      <Pagination />
    </main>
  );
}
