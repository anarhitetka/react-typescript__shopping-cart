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

        <S.CartControlsSection>
          <div className="select-quantity-btn">
            <button
              className="decrease-btn"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>

            <span className="quantity-num">{quantity}</span>

            <button
              className="increase-btn"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>

          {quantity === 0 ? (
            <button
              className="add-to-cart-btn"
              onClick={() => increaseCartQuantity(id)}
            >
              ADD TO CART
            </button>
          ) : (
            <button
              className="remove-from-cart-btn"
              onClick={() => removeFromCart(id)}
            >
              REMOVE FROM CART
            </button>
          )}
        </S.CartControlsSection>
      </S.CardBody>
    </>
  );
}
