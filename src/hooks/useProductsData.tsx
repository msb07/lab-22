import axios from 'axios';
import create from 'zustand';
import { ProductProps } from '../components/Product';

type ProductsDataProps = {
  products: ProductProps[];
  fetchProducts: () => void;
};

export const useProductData = create<ProductsDataProps>((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await axios.get<ProductProps[]>(
      'http://localhost:3001/products'
    );
    set({ products: response.data });
  },
}));
