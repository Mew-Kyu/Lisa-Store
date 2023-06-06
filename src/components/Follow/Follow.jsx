import { CardInsta } from "components/CardInsta";
import { styled } from "styled-components";
import fl1 from "assets/follow/follow1.svg";
import fl2 from "assets/follow/follow2.svg";
import fl3 from "assets/follow/follow3.svg";
import fl4 from "assets/follow/follow4.svg";
import fl5 from "assets/follow/follow5.svg";
import fl6 from "assets/follow/follow6.svg";

const data = [
  {
    image: fl1,
  },
  {
    image: fl2,
  },
  {
    image: fl3,
  },
  {
    image: fl4,
  },
  {
    image: fl5,
  },
  {
    image: fl6,
  },
];

const StyledFollow = styled.div`
  background: #f0f0f0;
  padding: 0 10%;
  height: 653px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: #000;
  }
  .tag {
    font-weight: 500;
    font-size: 28px;
    color: #ff6f61;
    text-align: center;
  }
  .allinsta {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Follow = () => {
  return (
    <StyledFollow>
      <p className="title">Follow Products And Discounts On Instagram</p>
      <div className="allinsta">
        {data.map((item) => (
          <CardInsta image={item.image} />
        ))}
      </div>
      <p className="tag">@Lisa.Official</p>
    </StyledFollow>
  );
};
