import React, {
  createRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Visibility,
  Ref,
  Icon,
  Menu,
  Sticky,
} from "semantic-ui-react";
import "./Home.css";
import anime from "animejs";

import NameSVG from "../components/NameSVG/NameSVG";
import Projects from "../components/Projects/Projects"
import { resolveProjectReferencePath } from "typescript";

interface Props {}

export default function Home({}: Props): ReactElement {
  const [topPassed, setTopPassed] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    anime({
      targets: "#downArrow",
      translateY: ["-100px", "0px"],
      rotate: ["-45deg", "-45deg"],
      duration: 2000,
      easing: "easeOutElastic(1,0.6)",
    });
  }, []);
  const animateArrowEnter = () => {
    anime({
      targets: "#downArrow",
      translateY: ["0px", "20px"],
    });
    scrollTo("about")
  };
  const animateArrowLeave = () => {
    anime({
      targets: "#downArrow",
      translateY: ["20px", "0px"],
    });
  };
  const scrollTo = (location:string) =>{
    const locations:any = {
      "about":aboutMeRef,
      "projects":projectRef,
      "contact":contactRef
    }
    if (locations[location].current && locations[location]) {
      locations[location].current.scrollIntoView({behavior:"smooth"});
    }

  }

  return (
    <div className="container">
      <Segment
        inverted
        textAlign="center"
        vertical
        id="darkBackground"
        className="sideNavRail"
      >
        <Visibility onTopPassed={()=>{scrollTo("about") }} style={{gridArea:"h"}} once={false}/>
        <div id="sideNav">
          <div className="navItem" onClick={()=>scrollTo("about")}>About Me</div>
          <div className="navItem" onClick={()=>scrollTo("projects")}>Projects</div>
          <div className="navItem" onClick={()=>scrollTo("contact")}>Contact</div>
        </div>
      </Segment>

      {/* NAME */}
      <Segment inverted textAlign="center" id="nameSegment" vertical>
        <NameSVG />
        <div
          id="downArrow"
          onMouseEnter={animateArrowEnter}
          onMouseLeave={animateArrowLeave}
        ></div>
      </Segment>

      {/* ABOUT ME */}
      <div ref={aboutMeRef}></div>
      <Segment textAlign="center" id="aboutMe">
        <Header as="h2">About Me</Header>
        <Header as="p">
          I am a 1st year Computer Science Student at the University Of Warwick
        </Header>
      </Segment>

      {/* PROJECTS */}
      <div ref={projectRef}/>
      <Segment textAlign="center">
        <Projects />
      </Segment>


      {/* Contact Me */}
      <div ref={contactRef} />
      <Segment
        textAlign="center"
        inverted
        id="darkBackground"
        className="contact"
      >
        <Grid
          stackable
          verticalAlign="middle"
          textAlign="center"
          centered
          columns={3}
          divided
        >
          <Grid.Column textAlign="center">
            <a href="https://www.github.com/hugo-wb" target="_blank">
              <Icon name="github" size="huge" color="grey"></Icon>
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a
              href="https://www.linkedin.com/in/hugo-wong-berard-4499b91a0/"
              target="_blank"
            >
              <Icon name="linkedin" size="huge" color="grey"></Icon>
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a href="mailto:wongberard.hugo@gmail.com" target="_blank">
              <Icon name="mail" size="huge" color="grey"></Icon>
            </a>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
