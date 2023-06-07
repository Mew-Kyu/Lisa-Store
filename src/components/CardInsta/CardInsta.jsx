import { styled } from "styled-components";
import insta from "assets/follow/insta.svg";

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
  .insta {
    height: 50px;
    width: 50px;
    filter: invert(91%) sepia(0%) saturate(7463%) hue-rotate(89deg)
      brightness(116%) contrast(108%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover {
    .main {
      filter: brightness(50%);}
    .insta {
      opacity: 1;
    }
  }
`;

export const CardInsta = ({ image }) => {
  return (
    <StyledCard>
      <img className="main" src={image} alt="insta" />
      <img className="insta" src={insta} alt="insta icon" />
    </StyledCard>
  );
};
