import React from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Container from "common/src/components/UI/Container";
import SocialProfile from "../SocialProfile";
import { Icon } from "react-icons-kit";
import { coffee } from "react-icons-kit/ionicons/coffee";
import { SOCIAL_PROFILES } from "common/src/data/Portfolio/data";
import { ButtonWrapper } from "../../Portfolio/portfolio.style";

const ContactSection = ({
  copyrightStyle,
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  buttonStyle,
  buttonWrapper
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="contact_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Let’s Build Together !" />
          <Text
            {...secDescription}
            content="If you have a project opportunity waiting to be filled, I'd love to hear more about it! I am in the early stages of my career where exposure to future-proof technologies and chances to test and grow my skills are the primary focus."
          />
        </Box>
        <Box {...replyWrapper}>
          <SocialProfile
            className="footer_social"
            items={SOCIAL_PROFILES}
            iconSize={40}
          />
        </Box>
        <Box {...buttonWrapper}>
          <ButtonWrapper>
            <Button
              title="jaguarjung95@gmail.com"
              className="portfolio_button"
              {...buttonStyle}
            />
          </ButtonWrapper>
        </Box>
        <Box {...buttonWrapper}>
          <Text as="span" content="Built & designed with" {...copyrightStyle} />
          <Icon icon={coffee} size={25} className="heart_sign" />
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  copyrightStyle: PropTypes.object,
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object
};

ContactSection.defaultProps = {
  copyrightStyle: {
    fontSize: "14px",
    color: "#fff",
    pt: "6px",
    pr: "15px"
  },
  sectionWrapper: {
    pt: ["10px", "20px", "30px", "40px", "50px"],
    pb: ["70px", "80px", "100px", "110px", "120px"],
    bg: "#253652"
  },
  secTitleWrapper: {
    mb: "30px"
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center"
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    textAlign: "center",
    width: "600px",
    maxWidth: "100%",
    ml: "auto",
    mr: "auto",
    mb: "0"
  },
  replyWrapper: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "center"
  },
  replyTime: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#302b4e",
    mb: 0
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px"
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "50px",
    color: "#fff"
  }
};

export default ContactSection;
