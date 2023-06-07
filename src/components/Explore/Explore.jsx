import { styled } from "styled-components";
import brand1 from "assets/explore/brand-1.svg";
import brand2 from "assets/explore/brand-2.svg";
import brand3 from "assets/explore/brand-3.svg";
import brand4 from "assets/explore/brand-4.svg";
import brand5 from "assets/explore/brand-5.svg";
import itemx from "assets/explore/image-category-m.svg";
import item0 from "assets/explore/item-category-0.svg";
import item1 from "assets/explore/item-category-1.svg";
import item2 from "assets/explore/item-category-2.svg";
import item3 from "assets/explore/item-category-3.svg";
import { CardExplore } from "components/CardExplore";

const StyledExplore = styled.div`
  padding: 0 10%;
  background: #fff;
  .allbrand {
    padding: 90px 0;
    display: flex;
    justify-content: space-between;
  }
  .allpic {
    display: flex;
    justify-content: center;
    padding-left: 50px;
    gap: 20px;
    position: relative;
  }
  .title {
    font-weight: 400;
    font-size: 34px;
    width: 648px;
    height: 450px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-90deg);
    padding: 90px 0;
    position: absolute;
    left: -5%;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 50%;
  }
`;

const dataItem = [
  {
    image: item0,
    name: "pants",
    total: 200,
  },
  {
    image: item1,
    name: "coat",
    total: 520,
  },
  {
    image: item2,
    name: "shirt",
    total: 320,
  },
  {
    image: item3,
    name: "jacket",
    total: 103,
  },
];

export const Explore = () => {
  return (
    <StyledExplore>
      <div className="allbrand">
        <img src={brand1} alt="Graphic Studio" />
        <img src={brand2} alt="S.Salva" />
        <img src={brand3} alt="Golden Studio" />
        <img src={brand4} alt="Furniture Design" />
        <img src={brand5} alt="Travel Lookbook" />
      </div>
      <div className="allpic">
        <span className="title">Explore new and popular styles</span>
        <div>
          <CardExplore image={itemx} name={"manto"} total={86} />
        </div>
        <div className="item">
          {dataItem.map((item) => (
            <CardExplore
              image={item.image}
              name={item.name}
              total={item.total}
            />
          ))}
        </div>
      </div>
    </StyledExplore>
  );
};
