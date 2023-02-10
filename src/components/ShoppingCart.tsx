import { useShoppingCart } from "../context/ShoppingCartContext";
import * as S from "./ShoppingCart.styled";

export function ShoppingCart(): JSX.Element {
  const { isOpen, closeCart } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <S.ShoppingCartContainer>
          <S.CartHeader>
            <h3>Cart</h3>
            <S.CloseBtn onClick={closeCart}></S.CloseBtn>
          </S.CartHeader>
        </S.ShoppingCartContainer>
      )}
    </>
  );
}
