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

export const AddToCartSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartControlsWrapper = styled.div`
  border: 1px solid orange;
  padding: 10px;
  border-radius: 20px;
  margin: 0 5px;
  width: 150px;
  text-align: center;
`;

export const CartButton = styled.div`
  border: 1px solid orange;
  padding: 10px;
  border-radius: 20px;
  margin: 0 5px;
  cursor: pointer;
  width: 150px;
  text-align: center;
  font-size: 0.9rem;
`;

export const ChangeQuantityBtn = styled.span`
  padding: 5px 15px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  padding: 5px 15px;
`;
