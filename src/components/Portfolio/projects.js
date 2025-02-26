import g2BlogImg from "../../assets/portfolio/g2-blog.png";
import pokemonImg from "../../assets/portfolio/pokemon-viewer.png";
import portfolioImg from "../../assets/portfolio/personal-website.png";
import lecturmoImg from "../../assets/portfolio/lecturmo.png";
import SparkleHaze from "../../assets/portfolio/SparkleHaze.png"
import DrTuring from "../../assets/portfolio/Dr-turing.png"

// default heights
const mobileBackHeight = "500px";
const PCBackHeight = "480px";

const projects = [
  {
    title: "Dr Turing",
    src: DrTuring,
    desc: "AI chatbot that allows patients to chat to an AI which recommends where to go if a person feels unwell and generates a SOAP report which can be shared with the healthcare provider via a code. It is written using React with a Node Backend. It utilizes AWS such as DynamoDb for the Database and AWS bedrock for the model. The model is trained using Resource Augmented Generation (RAG)",
    skills: [
      "DynamoDB",
      "ExpressJs",
      "React",
      "NodeJs",
      "Google Oauth 2",
      "MUI",
      "AWS EC2",
      "Github Actions",
      "AWS Bedrock",
      "API",
      "PR Review",
      "HTML",
      "CSS",
      "GitHub",
    ],
    demo: "https://lecturmo.org",
    code: "https://github.com/Aldenmaiyor1/Lecturmo",
    mobileBackHeight: "700px",
    PCBackHeight: "650px",
  },
  {
    title: "Lecturmo - MERN Stack",
    src: lecturmoImg,
    desc: "Lecturmo is a student course review website enhanced with technology. It uses a dynamic QR code system for real-time attendance tracking, linked to a badge system where students obtain ranks based on attendance, displayed alongside their reviews to enhance credibility. The platform also includes AI-driven technology, leveraging OpenAI API, to generate concise summaries of course reviews, making them more accessible and informative. Additionally, Lecturmo ensures all users are verified university students by requiring registration via university email addresses, maintaining a reliable and relevant user base. Finally, there is a comprehensive account and profile management system in place.",
    skills: [
      "MongoDB",
      "ExpressJs",
      "React",
      "NodeJs",
      "PassportJs",
      "MUI",
      "AJAX",
      "API",
      "PR Review",
      "HTML",
      "CSS",
      "GitHub",
    ],
    demo: "https://lecturmo.org",
    code: "https://github.com/Aldenmaiyor1/lecturmon",
    mobileBackHeight: "700px",
    PCBackHeight: "650px",
  },
  {
    title: "Full Stack Blog Website",
    src: g2BlogImg,
    desc: "User-friendly, secure, and interactive. Features include user registration and authentication, article comments, likes, and subscriptions. WYSIWYG editor for content control. User autonomy over personal information. Analytics for insights into user-generated content. Primary reviewer for PRs and merge conflicts.",
    skills: [
      "ExpressJs",
      "NodeJs",
      "VanillaJs",
      "UUID",
      "AJAX",
      "API",
      "Handlebars",
      "HTML",
      "CSS",
      "SQL",
      "ER Diagram",
      "GitHub",
    ],
    demo: "https://full-stack-blog-f6yb.onrender.com/",
    code: "https://github.com/Aldenmaiyor1/BloggingWebsite",
    mobileBackHeight: "550px",
    PCBackHeight: PCBackHeight,
    warning: true,
  },
  {
    title: "SparkleHaze Messenging feature",
    src: SparkleHaze,
    desc: "In the Vue development role for the Fourier Labs landing page, successfully integrated new components based on Figma design specifications, encompassing the creation of numerous page views and visual elements. Ensured the website's responsive design, improved footer link functionality, and addressed existing bugs for enhanced performance.",
    skills: [
      "VueJs",
      "JavaScript",
      "NodeJs",
      "GitHub",
      "HTML",
      "CSS",
      "Tailwind",
    ],
    demo: false,
    code: false,
    mobileBackHeight: mobileBackHeight,
    PCBackHeight: PCBackHeight,
    warning: false,
  },
  {
    title: "Steam App tracker",
    src: pokemonImg,
    desc: "Developed a App using React Native that allows a user to search for games which are on sale on steam",
    skills: ["ExpressJs", "NodeJs", "React Native", "JavaScript", "Expo", "CSS", "Tailwind"],
    demo: "https://pokemon-viewer-1g8o.onrender.com/#",
    code: false,
    mobileBackHeight: "550px",
    PCBackHeight: PCBackHeight,
    warning: true,
  },
  {
    title: "Personal Portfolio Website",
    src: portfolioImg,
    desc: "Explore my dynamic personal portfolio website, built with React and Tailwind CSS, enhanced with fluid animations powered by Framer Motion! With a focus on modular input data, ensuring effortless updates to showcase my evolving skills and projects.",
    skills: [
      "React",
      "Tailwind",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    code: "https://github.com/Aldenmaiyor1/SteamGameApp",
    mobileBackHeight: mobileBackHeight,
    PCBackHeight: PCBackHeight,
    warning: false,
  },
];

// PROJECTS ARCHIVE
// {
//   title: "Eigen Cash Website",
//   src: eigenCashImg,
//   desc: "Led the optimization of Fourier Lab's Eigen Cash website's React-based architecture, ensuring full responsiveness and adapting the design for diverse screen sizes. Successfully integrated an extra page to inform users of the privacy policy.",
//   skills: ["React", "JavaScript", "NodeJs", "GitHub", "HTML", "CSS"],
//   demo: "https://www.eigen.cash/",
//   code: false,
//   mobileBackHeight: mobileBackHeight,
//   PCBackHeight: PCBackHeight,
//   warning: false,
// },

export default projects;