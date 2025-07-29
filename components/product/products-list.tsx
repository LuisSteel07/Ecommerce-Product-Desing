import SliceProducts from "./slice-products";

export default function ProductsList() {
  return (
    <section className="md:grid xl:grid-cols-4 md:grid-cols-2 flex flex-col justify-center items-center min-h-screen">
      <SliceProducts />
    </section>
  );
}
