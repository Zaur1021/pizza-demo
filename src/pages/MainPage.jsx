import styled from "styled-components";
import MainFooter from "../components/MainFooter";
import MainHero from "../components/MainHero";
import MainNav from "../components/MainNav";
const StyledMain = styled.main`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
function MainPage() {
  return (
    <StyledMain>
      <MainNav />
      <MainHero />
      <MainFooter />
    </StyledMain>
  );
}

export default MainPage;
