import { Dispatch, SetStateAction } from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline';

import Button from '../Button';
import Typography from '../Typography';

import { Wrapper, Subtotal, Header } from './styles';
import { useCart } from '../../hooks/useCart';
import Product, { ProductProps } from '../Product';
import { PriceFormatter } from '../../common/PriceFormatter';

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const cart = useCart((state) => state.cart);

  const TotalPrice = (products: ProductProps[]) => {
    return products.reduce(
      (acc: number, product) => acc + product.amount * product.price,
      0
    );
  };
  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size='large' fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      {cart?.map((product) =>
        product.amount === 0 ? (
          <></>
        ) : (
          <Product key={product.id} product={product} />
        )
      )}
      <Subtotal>
        <Typography level={5} size='large' fontWeight={600}>
          Total
        </Typography>
        <Typography>{PriceFormatter(TotalPrice(cart))}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  );
};

export default MenuPayment;
