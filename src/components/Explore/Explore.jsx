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
    top: 1;
    left: 6%;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 50%;
  }
`;

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
        <img src={itemx} alt="Manto" />
        <div className="item">
          <img src={item0} alt="Pants" />
          <img src={item1} alt="Coat" />
          <img src={item2} alt="Shirt" />
          <img src={item3} alt="Jacket" />
        </div>
      </div>
    </StyledExplore>
  );
};
