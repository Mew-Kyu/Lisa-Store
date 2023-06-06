import { styled } from "styled-components";
import woman from "assets/ads/woman.svg";
import zara from "assets/ads/logo.svg";
import title from "assets/ads/title.svg";
import { Button } from "components/Button";

const StyledAds = styled.div`
  width: 100%;
  height: 776px;
  background: #000;
  display: flex;
  img {
    width: 55%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 732px;
    height: 309px;
    padding-top: 5%;
    right: 0;
  }
  .content {
    width: 30%;
    padding-top: 6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
  .des {
    font-size: 26px;
    color: #ff6f61;
  }
  .title {
    width: 191px;
    height: 81px;
  }
  Button:hover {
    transition: 0.3s;
    background-color: #ff6f61;
  }
`;

export const BannerAds = () => {
  return (
    <StyledAds>
      <img src={woman} alt="woman dance" />
      <img className="logo" src={zara} alt="Zara logo" />
      <div className="content">
        <img className="title" src={title} alt="brand name" />
        <p className="des">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <Button
          borderRadius={"none"}
          width={"237px"}
          height={"72px"}
          textColor={"#1E2832"}
          bgColor={"#fff"}
          fontSize={29}
        >
          See Collection
        </Button>
      </div>
    </StyledAds>
  );
};
