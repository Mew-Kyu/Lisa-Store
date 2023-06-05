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
    </StoreLayout>
  );
};

export default Homepage;
