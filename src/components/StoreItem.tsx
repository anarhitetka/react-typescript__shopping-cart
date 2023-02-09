import * as S from "./StoreItem.styled";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  images: Array<string>;
};

export function StoreItem({ id, title, price, images }: StoreItemProps) {
  return (
    <>
      {images && (
        <S.ImageWrapper>
          <S.Image src={images[0]} alt="product image" />
        </S.ImageWrapper>
      )}
      <S.CardBody>
        <S.CardTitleAndPrice>
          <h4>{title}</h4>
          <p>{formatCurrency(price)}</p>
        </S.CardTitleAndPrice>
        <S.AddToCart>
          <button>ADD TO SHOPPING CART</button>
        </S.AddToCart>
      </S.CardBody>
    </>
  );
}
