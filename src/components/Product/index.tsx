import { PriceFormatter } from '../../common/PriceFormatter';
import { useCart } from '../../hooks/useCart';
import Incrementor from '../Incrementor';
import { Wrapper, Info, Column, Text, WrapperIncrementor } from './styles';

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
  amount: number;
};

export type ProductComponentProps = {
  product: ProductProps;
};

const Product = ({ product }: ProductComponentProps) => {
  const cart = useCart((state) => state.cart);
  const increaseAmount = useCart((state) => state.IncreaseAmount);
  const decreaseAmount = useCart((state) => state.decreaseAmount);

  const getAmount = (cart: ProductProps[]) => {
    let amount = 0;
    cart.forEach((item) => {
      if (item.id === product.id) {
        amount = item.amount;
      }
    });
    return amount;
  };
  const amount = getAmount(cart);

  return (
    <Wrapper>
      <img src={product.picture} alt={`Imagem de referência ${product.name}`} />

      <Info>
        <Column>
          <Text>{product.name}</Text>
          <Text>{PriceFormatter(product.price)}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            amount={amount}
            onClickPlus={() => increaseAmount(product)}
            onClickMinus={() => decreaseAmount(product)}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};

export default Product;
