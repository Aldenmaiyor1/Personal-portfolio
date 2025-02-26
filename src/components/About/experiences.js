import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const blueGradient = "linear-gradient(to bottom, #023e8a, #0077b6, #0096c7)";
const blue = "#023e8a"
const greenGradient =
  "linear-gradient(to bottom, #1b4332, #2d6a4f, #40916c, #52b788)";
const green = "#2d6a4f"
const purpleGradient =
  "linear-gradient(to bottom, #070F2B, #1B1A55, #535C91, #9290C3)";
const purple = "#1B1A55"

const experiences = [
  {
    title: "Most Google APIs Award | Google Developer Student Clubs Hackathon",
    sub: "University of Auckland",
    desc: "Won 'Most Google APIs Used' award for integrating 7 Google APIs to enhance physical health in the digital age. Built a health tracking app where a virtual pet reflects user health metrics, integrating data on sleep, heart rate, etc. Used React for the frontend, Express with Supabase and Prisma for the backend, and OAuth for authentication.",
    date: "2024 Sep",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Technical Lead | Full Stack Developer",
    sub: "Project Magma (Univeristy of Auckland)",
    desc: "Worked Project Magma, a initiative at the University of Auckland that aimed to help good causes and give students practical experience, as a tech lead on their project with Big Brothers and Big Sisters Auckland. Ideated a solution to increase their online presence by creating a data pipeline for their various sources of data to aggregate them into a single source. This allowed them to efficiently analyze their data and make good data-driven decisions.",
    date: "2024 Jan - 2024 July",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "People's Choice Award | AI for the Environment Hackathon | AI Forum NZ",
    sub: "Datacom, Auckland",
    desc: "Won People's Choice Award for our pitch on protecting biodiversity through a pest control strategy to eliminate stoats. Prototyped an AI model trained on historical and environmental data to predict stoat behavior, guiding trap placement to make pest control more effective.",
    date: "2024 Aug",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Accenture Nz Tech Challenge 2024 2nd place",
    sub: "University of Auckland",
    desc: "Won 2nd place for our prototyped mobile app aggregating different modes of transport into a single app. Integrated various services such as Uber, Google maps, and Beam. Won a Boom portable speaker :D",
    date: "2024 June",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Software developer",
    sub: "Web Development Consulting Club (WDCC) || Univeristy of Auckland",
    desc: "Developed an event tracker project for the Web Development Consulting Club using the React,TypeScript and Node.js stack allowing the WDCC to collect and utilize event data to increase attendance rates and optimize resource allocation. Spearheaded database design and front end-backend integration as well as led the event creation and validation features that allowed students to attend events and track them to increase student engagement. Was also a Ticket supervisor for less experienced developers to assist them with their tasks ",
    date: "2024 Feb - 2024 Jun",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Class rep",
    sub: "University of Auckland",
    desc: "Class rep for Infosys 727",
    date: "2024 Feb",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Masters of Information Technology",
    sub: "University of Auckland",
    desc: (
      <ul className="list-disc">
        Key Courses include:
        <li className="ml-6 ">Creating Maintainable Software</li>
        <li className="ml-6 ">Cloud Computing Architecture</li>
        <li className="ml-6 ">Advanced Topics in Database Systems</li>
        <li className="ml-6 ">Software Tools and Techniques</li>
        <li className="ml-6 ">Advanced Information Security</li>
      </ul>
    ),
    date: "2024 Feb - 2025 Feb",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
  {
    title: "Frontend Engineer Internship",
    sub: "SparkleHaze | Remote",
    desc: "Worked on with a team to develop a messenger app on the WooHoo device. Used React Native and Node.js backend",
    date: "2024 Jan - 2024 July",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Summer Lab",
    sub: "University of Auckland",
    desc: "Participated in the 2024 University of Auckland Summer Lab over 4 weeks. Ideated a solution to student loneliness by creating a website and univeristy club",
    date: "2024 Jan- 2024-Feb",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "EY Ideate and Innovate Challenge runner-up",
    sub: "EY",
    desc: "Achieved runner up at the EY Ideate and Innovate Challenge by pitching and prototyping a scheduling App",
    date: "2023 Oct",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Class rep",
    sub: "University of Auckland",
    desc: "Class rep for CompSci 718",
    date: "2023 Jun",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Postgraduate Certificate of Information Technology",
    sub: "University of Auckland | Grade: A+ (94%)",
    desc: (
      <ul className="list-disc">
        Core Courses include:
        <li className="ml-6 ">
          Programming for Industry (Java, Swing, OOP, Industry Design Patterns,
          Unit Tests)
        </li>
        <li className="ml-6 ">
          Programming with Web Technologies (JavaScript, Node.js, Express.js,
          Handlebars, HTML, CSS)
        </li>
      </ul>
    ),
    date: "2023 Jun - 2023 Nov",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
  {
    title: "Microsoft Certified Power Bi Analyst (PL-300)",
    sub: "Microsoft",
    desc: "Obtained my Microsoft Certification as a Power Bi Analyst - Credential ID: F36627F701BFEC87",
    date: "2023 Feb - 2023 June",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "IT tutor",
    sub: "Chumbaka | Malaysia",
    desc: "Taught secondary and primary school students the basics of coding using Python and Scratch. Explained concepts suhc as IF statements, FOR loops and functions",
    date: "2023 Feb - 2023 June",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Data Science bootcamp",
    sub: "Auckland University of Technology (AUT)",
    desc: "Learnt about Exploratory data analysis, data cleaning and data modelling using Python in Jupyter Notebook ",
    date: "2022 Oct - 2023 Jan",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
  {
    title: "Healthcare Worker",
    sub: "Avondale Rest Home | Auckland",
    desc: "At Avondale Rest Home, I was responsible for caring for residents, ensuring their daily needs were met with compassion and efficiency. I communicated regularly with their families, providing updates and addressing any concerns about their well-being. Additionally, I worked closely with doctors and nurses, relaying important health information and assisting in implementing personalized care plans to improve residents’ quality of life.",
    date: "2022 Mar - 2023 Apr",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Barista",
    sub: "Box Cafe and Bar | Auckland",
    desc: "",
    date: "2017 Jan - 2020 Oct",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },

  {
    title: "Bachelor of Science Psychology",
    sub: "University of Auckland",
    desc: "Social Psychology | Behavioural Psychology | Healthcare Psychology | Occupational Psychology",
    date: "2017 Feb - 2021 Nov",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
];

export default experiences;