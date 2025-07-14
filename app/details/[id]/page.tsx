import Product from "../../components/Product";
import ProductImages from "../../components/product/ProductImages";

export default function Home({ params }: { params: {id: number}}) {
  const { id } = params;

  return (
    <article className="flex lg:flex-row flex-col items-center lg:gap-28 gap-16 justify-center md:mt-24 m-0">
      <ProductImages id={params.id}/>
      <Product id={params.id} />
    </article>
  );
}
