import Pagination from "@/components/pagination/pagination";
import ProductsList from "@/components/product/products-list";

export default function Home() {
  return (
    <main className="mt-16 flex flex-col justify-evenly">
      <ProductsList />
      <Pagination />
    </main>
  );
}
