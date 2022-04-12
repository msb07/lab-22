import { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { Container } from '../components/Container';
import Header from '../components/Header';
import { ProductList } from '../components/ProductList';
import { useProductData } from '../hooks/useProductsData';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fetchProducts = useProductData((state) => state.fetchProducts);
  const products = useProductData((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products && <ProductList data={products} />}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
