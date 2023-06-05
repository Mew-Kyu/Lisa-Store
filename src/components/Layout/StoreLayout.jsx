import { Header } from "components/Header";
import { styled } from "styled-components";

const LayoutStyled = styled.div`
  overflow-x: hidden;
  font-family: "Roboto";
`;

const StoreLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
    </LayoutStyled>
  );
};

export default StoreLayout;