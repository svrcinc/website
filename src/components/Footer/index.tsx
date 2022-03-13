import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { JpegIcon } from "../../common/JpegIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
            <Row justify="space-between">
              <Col lg={6} md={6} sm={12} xs={12}>
                <Language>{t("Contact")}</Language>
                <Large to="/">{t("Tell us everything")}</Large>
                <Para>
                  {t(`Do you have any question? Feel free to reach us at +1(732) 882-0170`)}
                </Para>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bsainath59@gmail.com" target="_blank">
                  <Chat>{t(`Let's Chat`)}</Chat>
                </a>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Language>{t("Address")}</Language>
                <Para>180 Talmadge Rd</Para>
                <Para>Edison</Para>
                <Para>NJ 08817</Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12}>
                <Label htmlFor="select-lang">{t("Language")}</Label>
                <LanguageSwitchContainer>
                  <LanguageSwitch onClick={() => handleChange("en")}>
                    <SvgIcon
                      src="united-states.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                  <LanguageSwitch onClick={() => handleChange("es")}>
                    <SvgIcon
                      src="spain.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                  <LanguageSwitch onClick={() => handleChange("en")}>
                    <JpegIcon
                      src="india.jpg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                      borderRadius="16px"
                    />
                  </LanguageSwitch>
                </LanguageSwitchContainer>
              </Col>
              
              
            </Row>
        </Container>
      </FooterSection>
      {/* <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Language>{t("SVR Consultancy")}</Language>
            <FooterContainer>
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />    
            </FooterContainer>
          </Row>
        </Container>
      </Extra> */}
    </>
  );
};

export default withTranslation()(Footer);
