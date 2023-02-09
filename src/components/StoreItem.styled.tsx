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

export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
`;
