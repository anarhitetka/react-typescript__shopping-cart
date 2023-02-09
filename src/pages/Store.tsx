import { useState, useEffect } from "react";
import { useApiGet, TypeApiResponse } from "../hooks/useApiHook";

interface Product {
  id: Number;
  title: String;
  price: Number;
  images: Array<String>;
}

export function Store() {
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

  console.log(products);

  //   if (!data.loading) console.log(data);
  return (
    <>
      <h1>Store</h1>
      <div>
        {!data.loading &&
          products &&
          products.map((product) => {
            return <div key={String(product.id)}>{product.title}</div>;
          })}
      </div>
    </>
  );
}
