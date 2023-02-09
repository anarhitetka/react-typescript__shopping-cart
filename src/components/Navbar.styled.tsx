import styled from "styled-components";

export const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-shadow: -3px -3px 16px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -3px -3px 16px 3px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: -3px -3px 16px 3px rgba(0, 0, 0, 0.25);
  @media (max-width: 385px) {
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const NavButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  color: #383838;
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
    color: #757575;
  }
  &:active {
    color: #aeaf4f;
  }
  @media (max-width: 385px) {
    width: 80vw;
  }
`;

export const NavButtonSvg = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding-right: 20px;
  @media (max-width: 385px) {
    padding-right: 0;
  }
`;
