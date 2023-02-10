import styled from "styled-components";

export const ImageWrapper = styled.div`
  height: 200px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitleAndPrice = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 0.9rem;
    color: var(--secondary-medium);
  }
`;

export const CartControlsSection = styled.div`
  display: flex;
  justify-content: center;

  .select-quantity-btn {
    padding: 10px;
    border-radius: 20px;
    margin: 0 5px;
    width: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
    padding: 0 15px;
    display: inline-block;
    width: 20px;
    font-weight: 700;
  }

  .add-to-cart-btn,
  .remove-from-cart-btn {
    border: none;
    background-color: var(--primary);
    padding: 10px;
    border-radius: 20px;
    margin: 0 5px;
    cursor: pointer;
    width: 180px;
    text-align: center;
    font-size: 0.9rem;
  }
  .add-to-cart-btn {
    color: var(--blue-medium);
  }
  .remove-from-cart-btn {
    color: var(--red-medium);
  }
`;
