import Product, { ProductProps } from '../Product';

export type ProductListProps = {
  data: ProductProps[];
};

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <>
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
};
