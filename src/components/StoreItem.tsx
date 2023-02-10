import * as S from "./StoreItem.styled";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  images: Array<string>;
  thumbnail: string;
};

export function StoreItem({
  id,
  title,
  price,
  images,
  thumbnail,
}: StoreItemProps): JSX.Element {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      {images && (
        <S.ImageWrapper>
          <S.Image src={thumbnail} alt="product image" />
        </S.ImageWrapper>
      )}
      <S.CardBody>
        <S.CardTitleAndPrice>
          <h4>{title}</h4>
          <p>{formatCurrency(price)}</p>
        </S.CardTitleAndPrice>

        <S.AddToCartSection>
          <S.CartControlsWrapper>
            <S.ChangeQuantityBtn onClick={() => decreaseCartQuantity(id)}>
              -
            </S.ChangeQuantityBtn>

            <S.Quantity>{quantity}</S.Quantity>

            <S.ChangeQuantityBtn onClick={() => increaseCartQuantity(id)}>
              +
            </S.ChangeQuantityBtn>
          </S.CartControlsWrapper>

          {quantity == 0 ? (
            <S.CartButton onClick={() => increaseCartQuantity(id)}>
              ADD TO CART
            </S.CartButton>
          ) : (
            <S.CartButton onClick={() => removeFromCart(id)}>
              REMOVE FROM CART
            </S.CartButton>
          )}
        </S.AddToCartSection>
      </S.CardBody>
    </>
  );
}
