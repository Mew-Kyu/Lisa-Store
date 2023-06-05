import { Button } from "components/Button";
import { styled } from "styled-components";
import fil from "assets/sub/filter.svg";

const StyledSub = styled.div`
  padding: 0 10%;
  font-family: "Open Sans";
  .title {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 50px;
    text-align: center;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .sub-title {
    display: flex;
    gap: 40px;
  }
  .m-title {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .m-title:hover {
    transition: 0.3s;
    color: #ff6f61;
  }
  .active {
    color: #000;
  }
  Button:hover {
    transition: 0.3s;
    background-color: #ff6f61;
  }
`;

export const Subto = () => {
  return (
    <StyledSub>
      <p className="title">Or subscribe to the newsletter</p>
      <div className="head">
        <div className="sub-title">
          <p className="m-title active">All Products</p>
          <p className="m-title">T-Shirt</p>
          <p className="m-title">Hoodies</p>
          <p className="m-title">Jacket</p>
        </div>
        <Button
          borderRadius={"none"}
          textColor={"#fff"}
          bgColor={"#1E2832"}
          width={"92px"}
          height={"32px"}
        >
          <img src={fil} alt="filter icon" /> Filter
        </Button>
      </div>
    </StyledSub>
  );
};
