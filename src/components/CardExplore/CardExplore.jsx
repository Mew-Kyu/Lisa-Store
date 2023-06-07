import { styled } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .number {
    height: 60px;
    width: 100%;
    position: absolute;
    bottom: 5px;
    background: #1e2832;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    color: #fff;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    text-transform: capitalize;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  &:hover {
    .number {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const CardExplore = ({ image, name, total }) => {
  return (
    <StyledCard>
      <img src={image} alt="styles" />
      <div className="number">
        <p>{name}</p>
        <p>{total} Product</p>
      </div>
    </StyledCard>
  );
};
