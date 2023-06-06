import BannerAds from "components/BannerAds";
import Collections from "components/Collections";
import Explore from "components/Explore";
import Subto from "components/Subto";

const { StoreLayout } = require("components/Layout");

const Homepage = () => {
  return (
    <StoreLayout>
      <Collections />
      <Explore />
      <Subto />
      <BannerAds />
    </StoreLayout>
  );
};

export default Homepage;
