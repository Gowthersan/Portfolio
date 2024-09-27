import {
  backend,
  creator,
  css,
  dart,
  docker,
  figma,
  firebase,
  gowtherfinanceapp,
  html,
  javascript,
  mobile,
  mombien,
  mongodb,
  moodle,
  prediction,
  python,
  reactjs,
  sm2i,
  solentaaviation,
  tailwind,
  texefa,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "Dart/Flutter Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "Data Scientist",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Dart",
    icon: dart
  },
  {
    name: "Firebase",
    icon: firebase
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "docker",
    icon: docker
  }
];

const experiences = [
  {
    title: "Software Technical Assistant",
    company_name: "SOLENTTA AVIATION Gabon",
    icon: solentaaviation,
    iconBg: "#383E56",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Collaborated on resolving technical issues and improving the performance of an access control application utilizing HIKVISION hardware.",
      "Programmed enhancements using technologies such as Python, C/C++, IoT, and Java to optimize system functionality.",
      "Utilized SADP Software for device management and configuration.",
      "Worked closely with cross-functional teams to ensure seamless integration and operation of the IoT-based access control system."
    ]
  },
  {
    title: "Web Developer",
    company_name: "TEXEFA - SARL",
    icon: texefa,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Participated in the design and implementation of key features for company products on a web page.",
      "Utilized tools and technologies including React.js, Hostinger, HTML/CSS, JavaScript, PHP, and SQL.",
      "Collaborated with the development team to ensure seamless functionality and user experience.",
      "Contributed to both front-end and back-end development, optimizing website performance and scalability."
    ]
  },
  {
    title: "Engieneer Data Assistant",
    company_name: "MOODLE",
    icon: moodle,
    iconBg: "#383E56",
    date: "May 2023 - Sep 2023",
    points: [
      "Contributed to the development of an innovative web application using modern frontend and backend technologies.",
      "Employed HTML/CSS, React.js/Next.js, Node.js, Angular, and JavaScript for robust front-end and back-end development.",
      "Integrated Firebase for real-time database management and Docker for containerization.",
      "Utilized TypeScript to enhance code quality and maintainability.",
      "Leveraged Power BI for data visualization and Jira (Agile) for project management."
    ]
  },
  {
    title: "Engeineer - Full Stack Developer",
    company_name: "SM2I",
    icon: sm2i,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developed a real estate listing platform across all digital platforms using Dart with Flutter and Android Studio.",
      "Implemented back-end functionality using Firebase and MongoDB to manage data and user authentication.",
      "Proposed a software solution for integrating maps into the application to address the remaining task of geolocating properties.",
      "Ensured cross-platform compatibility and a seamless user experience on both mobile and web applications.",
      "Leveraged Flutter's capabilities for responsive design and efficient performance across devices."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "Mombien App",
    description:
      "Develop an innovative real estate listing platform to enhance a key project of the company. Design a solution accessible across multiple media, including web and mobile applications, to provide a smooth and intuitive user experience. Enable users to easily navigate through listings, perform customized searches, and communicate directly with real estate agents. Adopt modern technologies and user-friendly interfaces to enhance the visibility of properties and establish a dynamic presence in the sector.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient"
      },
      {
        name: "firebase",
        color: "green-text-gradient"
      },
      {
        name: "dart",
        color: "pink-text-gradient"
      }
    ],
    image: mombien,
    source_code_link: "https://github.com/"
  },
  {
    name: "Prediction App",
    description:
      "Develop a predictive application using machine learning to forecast salaries for software engineers surveyed in 2024. Design a solution that integrates data from various sources to ensure accurate and reliable predictions. Enable users to input relevant variables, such as location, experience, and skills, to receive tailored salary estimates. Implement modern algorithms to analyze trends and patterns in the data, providing insights into salary ranges and growth potential. Establish a user-friendly interface to enhance the overall experience and facilitate informed decision-making for both job seekers and employers.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "python",
        color: "pink-text-gradient"
      }
    ],
    image: prediction,
    source_code_link:
      "https://github.com/Gowthersan/predictionSalaryEngineering2024"
  },
  {
    name: "Finance App",
    description:
      "Development of a financial dashboard using React. The dashboard provides real-time insights and analytics into financial data, offering features such as data visualization, trend analysis, and interactive charts. Technologies used: React, Redux, JavaScript, and REST APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: gowtherfinanceapp,
    source_code_link: "https://gowther-react-app.netlify.app/"
  }
];

export { experiences, projects, services, technologies, testimonials };
