import {
  FaHtml5,
  FaCss3,
  FaDocker,
  FaJs,
  FaNodeJs,
  FaReact,
  FaLaravel,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiSass,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiFastapi,
  SiElectron,
} from "react-icons/si";

const skills = {
  title: "My Skills",
  description:
    "I’m skilled in HTML5, CSS3, JavaScript, React.js, and Next.js for frontend development, and Node.js, PHP, Laravel, MongoDB, and MySQL for backend solutions. I also have experience with TypeScript, Tailwind CSS, FastAPI, Electron, and Figma, enabling me to deliver modern, scalable, and visually appealing applications.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "Css 3" },
    { icon: <SiSass />, name: "Sass" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaJs />, name: "Javascript" },
    { icon: <FaNodeJs />, name: "Node Js" },
    { icon: <FaReact />, name: "React.Js" },
    { icon: <SiNextdotjs />, name: "Next.Js" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <SiTailwindcss />, name: "Tailwindcss" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "Mysql" },
    { icon: <SiPhp />, name: "Php" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiFastapi />, name: "Fastapi" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiElectron />, name: "Electron" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

export default skills;
