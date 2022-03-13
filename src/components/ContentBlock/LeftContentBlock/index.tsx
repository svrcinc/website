import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { PngIcon } from "../../../common/PngIcon";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../../common/Button";
import {
  LeftContentSection,
  Content,
  Content1,
  Content2,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  ButtonWrapper
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  content1,
  content2,
  section,
  button,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Content>{t(content1)}</Content>
              <Content>{t(content2)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("contact")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
              
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          {item.smallIcon ? (
                            <div style={{ height: '60px', width: "60px", display: "flex" }}>
                              <PngIcon src={item.icon} width="32px" height="32px" />
                              <PngIcon src={item.icon} width="32px" height="32px" style={{ position: "absolute", right: "168px" }}/>
                            </div>
                          ): <PngIcon src={item.icon} width="60px" height="60px" />}
                          
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                          <MinPara>{t(item.content1)}</MinPara>
                          <MinPara>{t(item.content2)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
