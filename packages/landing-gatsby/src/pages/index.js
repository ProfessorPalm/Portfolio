import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { portfolioTheme } from "common/src/theme/portfolio";
import { ResetCSS } from "common/src/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper
} from "../containers/Portfolio/portfolio.style";

import BannerSection from "../containers/Portfolio/Banner";
import Navbar from "../containers/Portfolio/Navbar";
import PortfolioShowcase from "../containers/Portfolio/PortfolioShowcase";
import ProcessSection from "../containers/Portfolio/Process";
import ContactSection from "../containers/Portfolio/Contact";
import SEO from "../components/seo";

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <SEO title="Jaguar Jung" />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <PortfolioShowcase />
          <ProcessSection />
          <ContactSection />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
