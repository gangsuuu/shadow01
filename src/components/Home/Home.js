import Header from "../Layout/Header";
import IntroSection from "./IntroSection";
import SecondSection from "./Second/SecondSection";

export default function Home() {
  return(
    <>
      <Header></Header>
      <div className="test"></div>
      <IntroSection></IntroSection>
      <SecondSection></SecondSection>
    </>
  )
}