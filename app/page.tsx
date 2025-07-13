import ProductsList from "./components/ProductsList";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap gap-4 justify-center mt-16">
      <ProductsList />
    </main>
  );
}
