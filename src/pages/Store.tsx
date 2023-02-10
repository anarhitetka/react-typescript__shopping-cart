import { useState, useEffect } from "react";
import { useApiGet, TypeApiResponse } from "../hooks/useApiHook";
import { StoreItem } from "../components/StoreItem";
import * as S from "./Store.styled";

interface Product {
  id: number;
  title: string;
  price: number;
  images: Array<string>;
  thumbnail: string;
}

export function Store(): JSX.Element {
  const [products, setProducts] = useState<Array<Product>>([
    {},
  ] as Array<Product>);

  const data: TypeApiResponse = useApiGet(
    `https://dummyjson.com/products/?limit=10`
  );

  useEffect(() => {
    if (data) {
      setProducts(data.data?.products as Array<Product>);
    }
  }, [data]);

  return (
    <S.StoreContainer>
      <S.ProductsContainer>
        {data.loading && <p>Loading products</p>}

        {data.error && <p>Error fetching products {data.error.message}</p>}

        {!data.loading &&
          products &&
          products.map((product) => {
            return (
              <S.ProductCard key={String(product.id)}>
                <StoreItem {...product} />
              </S.ProductCard>
            );
          })}
      </S.ProductsContainer>
    </S.StoreContainer>
  );
}
