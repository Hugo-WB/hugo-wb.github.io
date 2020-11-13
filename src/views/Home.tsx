import React, { ReactElement, useEffect } from 'react'
import { Container, Segment , Grid, Header} from 'semantic-ui-react'
import "./Home.css"
import anime from "animejs"

import NameSVG from "../components/NameSVG/NameSVG"

interface Props {
  
}

export default function Home({}: Props): ReactElement {
  useEffect(()=>{
    anime({
      targets:"#downArrow",
      translateY:["-100px","0px"],
      rotate:["-45deg","-45deg"],
      duration:2000,
      easing: "easeOutElastic(1,0.6)"
      
    })
  })
  
  return (
    <div>
      <Segment inverted textAlign = "center" id = "nameSegment" vertical>
          <NameSVG />
          <div id="downArrow"></div>
      </Segment>

      <Segment textAlign = "center">
        <Header as="h2">About Me</Header>
        <Header as="p">I am a 1st year Computer Science Student at the University Of Warwick</Header>
      </Segment>

      <Segment textAlign = "center">
        <Grid>

        </Grid>
      </Segment>
    </div>
  )
}
