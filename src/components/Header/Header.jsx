import { ReactComponent as Find } from "assets/header/search.svg";
import { ReactComponent as Shop } from "assets/header/shop.svg";
import { ReactComponent as Acc } from "assets/header/acc.svg";
import { styled } from "styled-components";

const HeaderStyled = styled.div`
  background: #f0f0f0;
  padding: 0% 10%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand {
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    color: #000;
    font-family: "AmstelvarAlpha";
  }
  .accs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
  .shop,
  .acc {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .label {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #1e2832;
  }
  .line {
    bottom: 0;
    margin-top: 10px;
    border: 1px solid #e3e3e3;
  }
  .shop:hover,
  .acc:hover {
    span {
      color: #ff6f61;
    }
    svg {
      filter: invert(52%) sepia(29%) saturate(1083%) hue-rotate(316deg)
        brightness(101%) contrast(101%);
    }
  }
`;
export const Header = () => {
  return (
    <HeaderStyled>
      <div className="content">
        <Find />
        <span className="brand">Lisa Store</span>
        <div className="accs">
          <div className="shop">
            <Shop />
            <span className="label">Account</span>
          </div>
          <div className="acc">
            <Acc />
            <span className="label">Shopping</span>
          </div>
        </div>
      </div>
      <div className="line" />
    </HeaderStyled>
  );
};
