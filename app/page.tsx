import Product from "./components/Product";
import ProductImages from "./components/product/ProductImages";

export default function Home() {
  return (
    <article className="flex lg:flex-row flex-col items-center lg:gap-28 gap-16 justify-center md:mt-24 m-0">
      <ProductImages />
      <Product />
    </article>
  );
}
