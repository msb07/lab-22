import create from 'zustand';
import { ProductProps } from '../components/Product';

type CartProducts = {
  cart: ProductProps[];
  IncreaseAmount: (product: ProductProps) => void;
  decreaseAmount: (product: ProductProps) => void;
};

export const useCart = create<CartProducts>((set) => ({
  cart: [],

  IncreaseAmount: (product: ProductProps) => {
    set(({ cart }) => {
      const isProductInCart = cart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return {
          cart: cart.map((item) =>
            item.id === product.id && item.quantity > item.amount
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...cart, { ...product, amount: 1 }],
      };
    });
  },
  decreaseAmount: (product: ProductProps) => {
    set(({ cart }) => {
      const isProductInCart = cart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return {
          cart: cart.map((item) =>
            item.id === product.id && item.amount > 0
              ? { ...item, amount: item.amount - 1 }
              : item
          ),
        };
      }
      return {
        cart: [...cart],
      };
    });
  },
}));
