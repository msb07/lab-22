import axios from 'axios';
import { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { Container } from '../components/Container';
import Header from '../components/Header';
import { ProductProps } from '../components/Product';
import { ProductList } from '../components/ProductList';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get<ProductProps[]>(
        'http://localhost:3001/products'
      );
      setData(response.data);
      console.log(response.data);
    }
    getProducts();
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        <ProductList data={data} />
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
