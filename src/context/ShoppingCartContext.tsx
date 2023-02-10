import { ReactNode, createContext, useContext, useState } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  price: number;
};

type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number, price: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItemsQuantity: number;
  cartItems: Array<CartItem>;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartItemsQuantity = cartItems.length;

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number, price: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, price, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItemsQuantity,
        cartItems,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
