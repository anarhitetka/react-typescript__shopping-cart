import { useState, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useApiGet, TypeApiResponse } from "../hooks/useApiHook";
import { formatCurrency } from "../utils/formatCurrency";
import * as S from "./CartItem.styled";

type CartItemProps = {
  id: number;
  quantity: number;
};

interface Product {
  id: number;
  title: string;
  price: number;
  images: Array<string>;
  thumbnail: string;
}

export function CartItem({ id, quantity }: CartItemProps): JSX.Element {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const [product, setProduct] = useState({} as Product);

  const data: TypeApiResponse = useApiGet(
    `https://dummyjson.com/products/${id}`
  );

  useEffect(() => {
    if (data) {
      setProduct(data.data as Product);
    }
  }, [data]);

  return (
    <>
      {!data.loading && product && (
        <S.CartItemCard>
          <S.ImageWrapper>
            <S.Image src={product.thumbnail} alt="product image" />
          </S.ImageWrapper>

          <S.ItemDetails>
            <div>
              <h4>{product.title}</h4>
              <p className="single-price-for-item">
                {formatCurrency(product.price)}
              </p>
              <S.ControlQuantity>
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
                    onClick={() => increaseCartQuantity(id, product.price)}
                  >
                    +
                  </button>
                </div>
              </S.ControlQuantity>
            </div>
            <div className="total-price-container">
              <p className="total-price-for-item">
                {formatCurrency(product.price * quantity)}
              </p>

              <div className="remove-btn-container">
                <button
                  className="remove-from-cart-btn"
                  onClick={() => removeFromCart(id)}
                >
                  X
                </button>
              </div>
            </div>
          </S.ItemDetails>
        </S.CartItemCard>
      )}
    </>
  );
}
