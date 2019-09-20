import { socialLinkedin } from "react-icons-kit/ionicons/socialLinkedin";
import { documentText } from "react-icons-kit/ionicons/documentText";
import { socialDribbbleOutline } from "react-icons-kit/ionicons/socialDribbbleOutline";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";

import PortfolioImage1 from "../../assets/image/portfolio/portfolio-1.jpg";
import PortfolioImage2 from "../../assets/image/portfolio/portfolio-2.jpg";

import Step1 from "../../assets/image/portfolio/glasses.png";
import Step2 from "../../assets/image/portfolio/feedback.png";
import Step3 from "../../assets/image/portfolio/wand.png";

export const SOCIAL_PROFILES = [
  {
    icon: socialLinkedin,
    url: "https://www.linkedin.com/in/jaguar-jung/"
  },
  {
    icon: documentText,
    url:
      "https://drive.google.com/file/d/1vyWv00FYnOQUnIdTa6p8amtxT3KTO_1i/view?usp=sharing"
  },
  {
    icon: socialDribbbleOutline,
    url: "#"
  },
  {
    icon: socialGithub,
    url: "https://github.com/ProfessorPalm"
  }
];

export const MENU_ITEMS = [
  {
    label: "ME",
    path: "#banner_section",
    offset: "0"
  },
  {
    label: "PROJECTS",
    path: "#portfolio_section",
    offset: "0"
  },
  {
    label: "WHY ME?",
    path: "#process_section",
    offset: "0"
  },
  {
    label: "CONTACT",
    path: "#contact_section",
    offset: "0"
  }
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: "LOL Builder",
    portfolioItem: [
      {
        title: "LOL Builder",
        description:
          "ARAM (League of Legends) Build Generator that truly embodies the game mode's All-Random philosophy, leaving only pure mechanical skill and comedy on that icy bridge.",
        image: PortfolioImage1,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "React JS"
          },
          {
            content: "Node"
          },
          {
            content: "GraphQL"
          }
        ]
      },
      {
        title: "Hurdles: Generator",
        description:
          "The key feature and biggest hurdle of this project was the random item generator >>Insert brief explanation ARAM (League of Legends) Build Generator that truly embodies the game mode's All-Random philosophy, leaving only pure mechanical skill<<",
        image: PortfolioImage2,
        link: "#",
        featuredIn: "AppStore",
        featuredLink: "#",
        view: "8.5K",
        love: "5.5K",
        feedback: "3.2K",
        buildWith: [
          {
            content: "Riot API"
          },
          {
            content: "Firebase"
          },
          {
            content: "Styled Component"
          }
        ]
      }
    ]
  },
  {
    title: "PROJECT 2",
    portfolioItem: [
      {
        title: "Project 2",
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "React JS"
          },
          {
            content: "Next JS"
          },
          {
            content: "Styled Component"
          }
        ]
      },
      {
        title: "Hurdles: ",
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: "#",
        featuredIn: "AppStore",
        featuredLink: "#",
        view: "8.5K",
        love: "5.5K",
        feedback: "3.2K",
        buildWith: [
          {
            content: "React Native"
          },
          {
            content: "Firebase"
          },
          {
            content: "Styled Component"
          }
        ]
      }
    ]
  },
  {
    title: "Portfolio Website",
    portfolioItem: [
      {
        title: "Portfolio Website",
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "React JS"
          },
          {
            content: "Gatsby JS"
          },
          {
            content: "Styled Component"
          }
        ]
      },
      {
        title: "Hurdles: Design",
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: "#",
        featuredIn: "AppStore",
        featuredLink: "#",
        view: "8.5K",
        love: "5.5K",
        feedback: "3.2K",
        buildWith: [
          {
            content: "React Native"
          },
          {
            content: "Firebase"
          },
          {
            content: "Styled Component"
          }
        ]
      }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: "Observation & Ideation",
    description:
      "Observe and sympathize with users to understand patterns and pain points to then brainstorm on core findings."
  },
  {
    image: Step2,
    title: "Prototyping & Feedback",
    description:
      "Meet with users to critique prototype's shortcomings and solidify the requirements of the project."
  },
  {
    image: Step3,
    title: "Iteration & Implementation",
    description: "Iterate and reiterate until success and begin completion. "
  }
];

export const SERVICE_LIST = [
  {
    title: "Languages",
    listItems: [
      {
        content: "HTML"
      },
      {
        content: "CSS"
      },
      {
        content: "JavaScript/ES6+"
      },
      {
        content: "Java"
      },
      {
        content: "C# (Learning Unity)"
      }
    ]
  },
  {
    title: "Libraries & Frameworks",
    listItems: [
      {
        content: "React/Redux"
      },
      {
        content: "Node.js"
      },
      {
        content: "GraphQL"
      },
      {
        content: "Express.js"
      },
      {
        content: "Spring Boot & MVC"
      }
    ]
  },
  {
    title: "Databases & Servers",
    listItems: [
      {
        content: "MySQL"
      },
      {
        content: "GraphQL"
      },
      {
        content: "Nginx"
      },
      {
        content: "Apache Apollo"
      }
    ]
  }
];
