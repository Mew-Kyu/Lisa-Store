import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { styled } from "styled-components";

const LayoutStyled = styled.div`
  overflow: auto;
  font-family: "Roboto";
`;

const StoreLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

export default StoreLayout;
