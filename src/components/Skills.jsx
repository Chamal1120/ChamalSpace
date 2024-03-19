import "./Skills.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { CiBurger } from "react-icons/ci";

const Skills = () => {
  return (
    <div className="skillsBgContainer">
      <div className="skillContainer">
        <p className="skillTitle">My Tech Stack</p>
        <div className="skillFlexBox">
          <div className="skillFlexBoxTitleContainer">
            <p className="skillFlexBoxTitle">Languages</p>
          </div>
          <div className="skillFlexBox1">
            <div className="devText"> 
              <DiHtml5 className="devIcon" />
              HTML
            </div>
            <div className="devText">
              <DiCss3 className="devIcon" />
              CSS
            </div>
            <div className="devText">
              <DiJsBadge className="devIcon" />
              JavaScript
            </div>
            <div className="devText">
              <DiPython className="devIcon" />
              Python3
            </div>
            <div className="devText">
              <DiJava className="devIcon" />
              Java
            </div>
            <div className="devText">
              <DiCode className="devIcon" />
              C/C++
            </div>
          </div>
          <div className="skillFlexBoxTitleContainer">
            <p className="skillFlexBoxTitle">Frameworks/Technolegies</p>
          </div>
          <div className="skillFlexBox1">
            <div className="devText">
              <DiBootstrap className="devIcon" />
              Bootstrap
            </div>
            <div className="devText">
              <DiReact className="devIcon" />
              React
            </div>
            <div className="devText">
              <DiNodejsSmall className="devIcon" />
              NodeJS
            </div>
            <div className="devText">
              <CiBurger className="devIcon" />
              BunJS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
