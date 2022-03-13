import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import CareerContent from "../../content/CareerContent.json";
import AboutContent from "../../content/AboutContent.json";
import ServiceContent from "../../content/ServiceContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        content1={IntroContent.text1}
        content2={IntroContent.text2}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        content1={AboutContent.text1}
        content2={AboutContent.text2}
        section={AboutContent.section}
        icon="product-launch.svg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={CareerContent.title}
        content={CareerContent.text}
        content1={AboutContent.text1}
        content2={AboutContent.text2}
        section={CareerContent.section}
        icon="graphs.svg"
        id="career"
      />
      <ContentBlock
        type="left"
        title={ServiceContent.title}
        content={ServiceContent.text}
        content1={ServiceContent.text1}
        content2={ServiceContent.text2}
        button={ServiceContent.button}
        icon="waving.svg"
        id="service"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
