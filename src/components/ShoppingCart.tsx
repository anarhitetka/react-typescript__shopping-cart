import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";
import * as S from "./ShoppingCart.styled";

export function ShoppingCart(): JSX.Element {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  const totalSum = cartItems.reduce((total, currItem) => {
    return total + (currItem?.price || 0) * currItem.quantity;
  }, 0);

  return (
    <>
      {isOpen && (
        <S.ShoppingCartContainer>
          <S.CartHeader>
            <h3>Cart</h3>
            <S.CloseBtn onClick={closeCart}></S.CloseBtn>
          </S.CartHeader>
          <S.CartBody>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </S.CartBody>
          <S.TotalSum>TOTAL: {formatCurrency(totalSum)}</S.TotalSum>
        </S.ShoppingCartContainer>
      )}
    </>
  );
}
