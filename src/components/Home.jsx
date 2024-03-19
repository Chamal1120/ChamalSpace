import "./Home.css";
import imagePath from "../assets/images/ChamalRandika.png";
import Typewriter from "typewriter-effect";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LinearTextGradient } from "react-text-gradients-and-animations";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import MyPDF from "../assets/resume/resume.pdf";

const theme = createTheme({
  palette: {
    purple: {
      main: "#af5393",
      light: "#e374b4",
      dark: "#e374b4",
      contrastText: "#fffff",
    },
  },
});

const Home = () => {
  return (
    <div className="outerHeroBg">
      <div className="heroContainer">
        <div className="heroContent">
          <article>
            <hgroup>
              <AnimatedOnScroll
                animationIn="fadeInUp"
                animationInDuration={1000}
              >
                <LinearTextGradient
                  className="greet1"
                  angle={0}
                  colors={["#B230A3", "#CE8DB4", "#9013FE"]}
                  animate={true}
                  animateDirection={"vertical"}
                  animateDuration={30}
                >
                  Hello,
                </LinearTextGradient>
              </AnimatedOnScroll>
              <AnimatedOnScroll
                animationIn="fadeInUp"
                animationInDelay={500}
                animationInDuration={1000}
              >
                <h2 className="greet2">I&apos;m Chamal Randika</h2>
              </AnimatedOnScroll>
              <AnimatedOnScroll
                animationIn="fadeInUp"
                animationInDelay={1000}
                animationInDuration={1000}
              >
                <div className="highlightsContainer">
                  <div className="highlights1">
                    <p>{"I code to <"}</p>
                  </div>
                  <div className="highlights2">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1000)
                          .typeString("innovate")
                          .pauseFor(2000)
                          .deleteAll()
                          .pauseFor(1000)
                          .typeString("implement")
                          .pauseFor(2000)
                          .deleteAll()
                          .pauseFor(1000)
                          .typeString("inspire")
                          .pauseFor(2000)
                          .deleteAll()
                          .pauseFor(1000)
                          .start();
                      }}
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                      }}
                    />
                  </div>
                  <div className="highlights1">
                    <p>{"/>"}</p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDelay={1500}
                animationInDuration={1000}
              >
                <h2 className="aboutMe">A bit about me</h2>
              </AnimatedOnScroll>
              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDelay={2000}
                animationInDuration={1000}
              >
                <p className="aboutMeInfo">
                  I&apos;m an undergraduate <b>Software Engineer</b> from SLTC
                  Research University - Colombo, Sri Lanka.
                </p>
              </AnimatedOnScroll>
            </hgroup>
          </article>
          <AnimatedOnScroll
            animationIn="fadeIn"
            animationInDelay={2500}
            animationInDuration={1000}
          >
            <div className="resumeButton">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="purple"
                  sx={{
                    width: { xs: "8rem", md: "10rem" },
                    height: { xs: "2.5rem", md: "3rem" },
                    padding: "1rem",
                    fontSize: { xs: "0.8rem", md: "1rem" },
                  }}
                  disableElevation
                  onClick={() => {
                    window.open(MyPDF, "_blank");
                  }}
                  download="resume.pdf"
                >
                  My Resume
                </Button>
              </ThemeProvider>
            </div>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll
          animationIn="fadeIn"
          animationInDelay={0}
          animationInDuration={2000}
        >
          <div className="heroImage">
            <img id="image1" src={imagePath} alt="Chamal Randika" />
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
};

export default Home;
