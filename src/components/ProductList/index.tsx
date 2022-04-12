import Product, { ProductProps } from '../Product';

export type ProductListProps = {
  data: ProductProps[];
};

export const ProductList = ({ data }: ProductListProps) => {
  return (
    <>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};
