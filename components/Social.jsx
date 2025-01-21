import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/philip1091" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/philip1091/" },
  // { icon: <FaInstagram />, path: "" },
  // { icon: <FaYoutube />, path: "" },
];

const Social = ({containerStyles, iconStyles}) => {
  return(
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
};

export default Social;
