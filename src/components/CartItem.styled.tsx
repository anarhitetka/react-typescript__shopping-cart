import styled from "styled-components";

export const CartItemCard = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 15px;
  box-shadow: 3px 3px 32px 7px var(--shadow-light);
  -webkit-box-shadow: 3px 3px 32px 7px var(--shadow-light);
  -moz-box-shadow: 3px 3px 32px 7px var(--shadow-light);
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  height: 100px;
  width: 200px;
  @media (max-width: 350px) {
    width: 80px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const ItemDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  h4 {
    padding: 10px 0 0 0;
    margin: 0;
  }
  .single-price-for-item {
    font-size: 0.8rem;
    color: var(--secondary-medium);
  }
  .total-price-container {
    padding: 0;
    margin: 0;
    display: flex;
  }
  .total-price-for-item {
    font-weight: 700;
  }
  .remove-btn-container {
    display: flex;
    align-items: center;
  }
  .remove-from-cart-btn {
    border: none;
    background-color: var(--primary);
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    text-align: center;
    font-size: 0.9rem;
    color: var(--red-medium);
  }
  .remove-from-cart-btn:hover {
    color: var(--red-light);
  }
  @media (max-width: 500px) {
    padding: 0;
  }
  @media (max-width: 350px) {
    flex-direction: column;
    h4 {
      text-align: center;
    }
  }
`;

export const ControlQuantity = styled.div`
  .select-quantity-btn {
    font-size: 0.9rem;
    width: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .increase-btn,
  .decrease-btn {
    padding: 5px 15px;
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    font-size: 1.3rem;
  }

  .increase-btn:hover,
  .decrease-btn:hover {
    color: var(--blue-medium);
  }

  .quantity-num {
    padding: 0 10px;
    display: inline-block;
    width: 20px;
    font-weight: 700;
  }
`;
