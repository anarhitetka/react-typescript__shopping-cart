import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;
  background-color: var(--primary);
  overflow-y: scroll;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const CloseBtn = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  &:hover {
    &::before,
    &::after {
      background: var(--blue-medium);
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const CartBody = styled.div`
  padding: 10px;
`;

export const TotalSum = styled.div`
  text-align: right;
  padding: 15px;
  font-weight: 700;
  font-size: 1.35rem;
`;
