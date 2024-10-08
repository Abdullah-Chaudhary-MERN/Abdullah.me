import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import ReactIcon from "../../img/React.png";
import NodeIcon from "../../img/Node.png";
import javascriptIcon from "../../img/javascript.png";
import MongoIcon from "../../img/Mongo.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import FloatinIcon from "../FloatingIcon/FloatingIcon";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Abdullah Chaudhary</span>
          <span>
            Backend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Abdullah-Chaudhary-MERN" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-me/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn Icon" />
          </a>
          <a href="https://www.instagram.com/abdullah_chaudhary_____/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram Icon" />
          </a>
        </div>

      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "22%", left: "80%" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinIcon img={MongoIcon}/>
        </motion.div>
        <motion.div
          initial={{ top: "40%", left: "80%" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinIcon img={javascriptIcon}/>
        </motion.div>
        {/* animation */}
        <motion.div
          initial={{ top: "55%", left: "75%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={crown} text1="Back-end" text2="Developer" />
        </motion.div>
        <motion.div
             initial={{ left: "0rem", top: "5rem" }}
             whileInView={{ left: "1rem"}}
            transition={transition}
            className="floating-div"
          >
            <FloatinIcon img={NodeIcon} />
        </motion.div>
        <motion.div
             initial={{ left: "0rem", top: "12rem" }}
             whileInView={{ left: "1rem"}}
            transition={transition}
            className="floating-div"
          >
            <FloatinIcon img={ReactIcon} />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "21rem" }}
          whileInView={{ left: "3%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
