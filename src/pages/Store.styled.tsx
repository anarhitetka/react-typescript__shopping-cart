import styled from "styled-components";

export const StoreContainer = styled.div`
  padding: 2rem 0;
  overflow-y: auto;
  height: 80vh;
`;

export const ProductsContainer = styled.div`
  margin: 0 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
`;

export const ProductCard = styled.div`
  border-radius: 2px;
  padding: 1rem;
  box-shadow: 3px 3px 32px 7px var(--shadow-light);
  -webkit-box-shadow: 3px 3px 32px 7px var(--shadow-light);
  -moz-box-shadow: 3px 3px 32px 7px var(--shadow-light);
`;
