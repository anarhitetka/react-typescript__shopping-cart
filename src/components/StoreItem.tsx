import * as S from "./StoreItem.styled";
import { formatCurrency } from "../utils/formatCurrency";

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
}: StoreItemProps) {
  const quantity = 1;
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
          <S.CartButton>
            <S.ChangeQuantityBtn>-</S.ChangeQuantityBtn>
            <S.Quantity>{quantity}</S.Quantity>
            <S.ChangeQuantityBtn>+</S.ChangeQuantityBtn>
          </S.CartButton>
          <S.CartButton>ADD TO CART</S.CartButton>
          <S.CartButton>remove</S.CartButton>
        </S.AddToCartSection>
      </S.CardBody>
    </>
  );
}
