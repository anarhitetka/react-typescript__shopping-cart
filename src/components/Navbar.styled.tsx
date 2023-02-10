import styled from "styled-components";

export const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  height: 80px;
  background-color: var(--primary);
  box-shadow: -1px -1px 3px 1px var(--shadow-dark);
  -webkit-box-shadow: -1px -1px 3px 1px var(--shadow-dark);
  -moz-box-shadow: -1px -1px 3px 1px var(--shadow-dark);
  position: sticky;
  top: 0;
  z-index: 1;
  @media (max-width: 420px) {
    justify-content: center;
    align-items: center;
    height: auto;
    padding-bottom: 20px;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const LogoNavbar = styled.div`
  .left {
    color: grey;
  }
  .right {
    color: var(--blue-medium);
  }
  @media (max-width: 520px) {
    .left,
    .right {
      display: none;
    }
  }
`;

export const NavButton = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  color: var(--secondary-medium);
  cursor: pointer;
  font-family: "Noto Sans", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  margin: 5px;
  outline: none;
  padding: 13px 21px;
  text-align: center;
  &:hover {
    color: var(--secondary-light);
  }
  &:active {
    color: var(--green-medium);
  }
  @media (max-width: 420px) {
    width: 80vw;
  }
`;

export const NavButtonShoppingCart = styled.button`
  background-color: var(--primary);
  border: 1px solid var(--green-medium);
  margin-right: 20px;
  padding: 10px 12px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  @media (max-width: 420px) {
    margin-right: 0;
  }
  &:hover {
    border: 1px solid var(--secondary-medium);
  }
`;

export const NumOfItemsInCart = styled.div`
  background-color: var(--red-notification);
  color: white;
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
