import Pagination from "./components/pagination";
import ProductsList from "./components/product/products-list";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 relative grow justify-between items-center mt-16 min-h-screen">
      <ProductsList />
      <Pagination />
    </main>
  );
}
