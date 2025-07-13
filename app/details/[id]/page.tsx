import Product from "../../components/Product";
import ProductImages from "../../components/product/ProductImages";

type PageProps = {
  params: {
    id: number;
  };
};

export default function Home({ params }: PageProps) {
  const { id } = params;

  return (
    <article className="flex lg:flex-row flex-col items-center lg:gap-28 gap-16 justify-center md:mt-24 m-0">
      <ProductImages id={id}/>
      <Product id={id} />
    </article>
  );
}
