import { NavLink } from "react-router-dom";
import * as S from "./Navbar.styled.tsx";
import cartSvg from "../assets/cart.svg";

export function Navbar() {
  return (
    <S.Nav>
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
          <S.NumOfItemsInCart>15</S.NumOfItemsInCart>
        </S.NavButtonShoppingCart>
      </div>
    </S.Nav>
  );
}
