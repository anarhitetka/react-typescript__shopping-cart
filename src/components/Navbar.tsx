import { NavLink } from "react-router-dom";
import * as S from "./Navbar.styled.tsx";
import cartSvg from "../assets/cart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

export function Navbar(): JSX.Element {
  const { cartItemsQuantity } = useShoppingCart();

  return (
    <S.Nav>
      <S.LogoNavbar>
        <span className="left">go</span>
        <span className="right">shopping</span>
      </S.LogoNavbar>
      <div>
        <NavLink to="/">
          <S.NavButton>Home</S.NavButton>
        </NavLink>
        <NavLink to="/store">
          <S.NavButton>Store</S.NavButton>
        </NavLink>
        <NavLink to="/about">
          <S.NavButton>About</S.NavButton>
        </NavLink>
      </div>
      <div>
        <S.NavButtonShoppingCart>
          <img src={cartSvg} alt="shopping cart" />
          <S.NumOfItemsInCart>{cartItemsQuantity}</S.NumOfItemsInCart>
        </S.NavButtonShoppingCart>
      </div>
    </S.Nav>
  );
}
