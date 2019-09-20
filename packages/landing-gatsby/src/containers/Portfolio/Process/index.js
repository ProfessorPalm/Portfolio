import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Button from "reusecore/src/elements/Button";
import Container from "common/src/components/UI/Container";
import { plus } from "react-icons-kit/feather/plus";
import { PROCESS_STEPS, SERVICE_LIST } from "common/src/data/Portfolio/data";
import { ButtonWrapper } from "../../Portfolio/portfolio.style";
import ProcessItem from "./process.style";

const ProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
  buttonWrapper,
  buttonLabelStyle,
  buttonStyle,
  learningList,
  listItem,
  listText,
  listTitle
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="process_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading
            {...secTitle}
            content="Process: The Human Centered Design Approach"
          />
          <Text
            {...secDescription}
            content="Optimized not for functionality, but for usability at any scale."
          />
        </Box>

        <Box {...processRow}>
          {PROCESS_STEPS.map((item, index) => (
            <Box
              {...processCol}
              key={`process-item-${index}`}
              className="process_item_col"
            >
              <ProcessItem className="process_item">
                <Image
                  src={item.image}
                  alt={`process-image-${index + 1}`}
                  {...processImageStyle}
                />
                <Heading as="h3" content={item.title} {...processTitleStyle} />
                <Text content={item.description} {...processDescriptionStyle} />
              </ProcessItem>
            </Box>
          ))}
        </Box>

        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Heading
              content="Skills: Full-Stack Developer"
              {...learningTitle}
            />
            <Text
              content="Always hungry for new lessons"
              {...learningSubTitle}
            />
            <Text
              {...learningDescription}
              content="I'm Jaguar, most call me Jag, and I'm a Software Engineer looking for a place to grow. My favorite language is Javascript, especially with destructuring added in ES6. I've always preferred React over Angular but it's interesting to learn their nuances."
            />
            <Text {...learningDescription} content="With new technologies like GraphQL beginning to grow, I'm pretty excited to see how they will influence the developer ecosystem." />
            <Box {...buttonWrapper}>
              <Text content="Need help ?" {...buttonLabelStyle} />
              <ButtonWrapper>
                <Button
                  title="jaguarjung95@gmail.com"
                  className="portfolio_button"
                  {...buttonStyle}
                />
              </ButtonWrapper>
            </Box>
          </Box>
          <Box {...learningListArea}>
            {SERVICE_LIST.map((serviceList, index) => (
              <Box {...learningList} key={`serviceList-${index}`}>
                <Heading content={serviceList.title} {...listTitle} />
                {serviceList.listItems.map((item, index) => (
                  <Box {...listItem} key={`list-item-${index}`}>
                    <Icon icon={item.icon || plus} size={item.iconSize || 12} />
                    <Text as="span" content={item.content} {...listText} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ProcessSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
  buttonWrapper: PropTypes.object,
  buttonLabelStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listTitle: PropTypes.object
};

ProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ["40px", "50px", "60px", "70px", "100px"],
    pb: ["10px", "40px", "30px", "50px", "50px"]
  },
  secTitleWrapper: {
    mb: ["60px", "105px"]
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center"
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center"
  },
  processRow: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["0", "-15px", "-30px", "-70px", "-70px"],
    mr: ["0", "-15px", "-30px", "-70px", "-70px"]
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ["0", "15px", "30px", "70px", "70px"],
    pr: ["0", "15px", "30px", "70px", "70px"],
    mb: "40px"
  },
  processImageStyle: {
    ml: "auto",
    mr: "auto",
    mb: "35px"
  },
  processTitleStyle: {
    fontSize: ["20px", "18px", "20px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    textAlign: "center",
    mb: ["20px", "20px", "27px", "27px", "27px"]
  },
  processDescriptionStyle: {
    fontSize: ["15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    textAlign: "center",
    lineHeight: "1.5"
  },
  learningRow: {
    flexBox: true,
    flexWrap: "wrap",
    mt: ["20px", "30px", "70px", "80px", "110px"]
  },
  learningContentArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    pr: ["0px", "0px", "60px", "80px", "160px"],
    mb: ["70px", "70px", "0", "0", "0"]
  },
  learningTitle: {
    fontSize: ["22px", "22px", "24px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["20px", "20px", "15px", "20px", "20px"],
    pr: ["0", "0", "0", "65px", "65px"]
  },
  learningSubTitle: {
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "20px",
    pr: ["0", "0", "0", "65px", "65px"]
  },
  learningDescription: {
    fontSize: "16px",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "25px"
  },
  buttonWrapper: {
    flexBox: true,
    alignItems: "center",
    mt: ["30px", "40px", "40px", "80px", "80px"],
    flexWrap: ["wrap"]
  },
  buttonLabelStyle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#5e87b4",
    mb: ["20px", "20px", "20px", "0", "0"],
    mr: "30px",
    width: ["100%", "100%", "100%", "auto", "auto"]
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px"
  },
  learningListArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    flexBox: true,
    flexWrap: "wrap"
  },
  learningList: {
    width: ["100%", "33.3333333%", "50%", "50%", "50%"],
    pl: ["0", "0", "35px", "35px", "35x"],
    pr: ["0", "30px", "0", "0", "0"],
    mb: ["40px", "40px", "60px", "80px", "90px"]
  },
  listTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#302b4e",
    mb: "25px"
  },
  listItem: {
    flexBox: true,
    alignItems: "center",
    color: "#43414e",
    mb: "16px"
  },
  listText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    mb: "0",
    ml: "5px"
  }
};

export default ProcessSection;
