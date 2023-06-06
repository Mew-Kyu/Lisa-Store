import { Button } from "components/Button";
import { CardSub } from "components/CardSub";
import { styled } from "styled-components";
import sub1 from "assets/sub/sub1.svg";
import sub3 from "assets/sub/sub3.svg";
import sub4 from "assets/sub/sub4.svg";
import sub5 from "assets/sub/sub5.svg";

const StyledBest = styled.div`
  padding: 0 10%;
  font-family: "Open Sans";
  .title {
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
  .card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const BestSell = () => {
  return (
    <StyledBest>
      <p className="title">Best Sellers</p>
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
          Show All
        </Button>
      </div>
      <div className="card">
        <CardSub
          name={"Basic Dress Green"}
          bgImage={sub4}
          category={"Dress"}
          price={236}
          tag={"Hot"}
          bgColor={"#FF6F61"}
        />
        <CardSub
          name={"Nike Sportswear Futura Luxe"}
          bgImage={sub1}
          category={"Bag"}
          price={130}
        />
        <CardSub
          name={"Yellow Reserved Hoodie"}
          bgImage={sub3}
          category={"Dress"}
          oldprice={364}
          newprice={155}
          tag={"Sale"}
          bgColor={"#1E2832"}
        />
        <CardSub
          name={"Nike Air Zoom Pegasus"}
          bgImage={sub5}
          category={"Shoe"}
          oldprice={220}
          newprice={198}
          tag={"Sale"}
          bgColor={"#1E2832"}
        />
      </div>
    </StyledBest>
  );
};
