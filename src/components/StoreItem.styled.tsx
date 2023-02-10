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

export const CartButton = styled.div`
  border: 1px solid orange;
  padding: 10px;
  border-radius: 20px;
  margin: 0 5px;
`;

export const ChangeQuantityBtn = styled.span`
  padding: 5px;
`;

export const Quantity = styled.span`
  padding: 5px;
`;
