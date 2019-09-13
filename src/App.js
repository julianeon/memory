import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Pica = styled.div`
background-color: gray;
text-align: center;
margin-top: 1vh;
margin-bottom: 1vh;
white-space:pre-wrap;
`

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Ccard = (props) => {
    const [clicked, setClicked] = useState(false);        

    const handleClick = (event) => {
        setClicked(!clicked);
        event.preventDefault();        
    }

    const beforeAfter = (didClick) => {
        if (didClick) {
            
            return <Pica onClick={handleClick} style={{backgroundColor: props.color}}>{props.text}</Pica>            
        } else {
            return <Pica onClick={handleClick} style={{backgroundColor: "gray"}}> </Pica>            
        }
    }

    useInterval(() => {
        setClicked(false);
    }, 1000);
    
    return (
        <>
          {beforeAfter(clicked)}
        </>
    );
    
}


function App() {
  return (
      <div className="App">
        <Container>
          <Row>
            <Col><Ccard text={"pig"} color={"pink"}/></Col>
            <Col><Ccard text={"dog"} color={"brown"}/></Col>
            <Col><Ccard text={"frog"} color={"chartreuse"}/></Col>          
          </Row>
          <Row>
            <Col><Ccard text={"frog"} color={"chartreuse"}/></Col>                      
            <Col><Ccard text={"cat"} color={"orange"}/></Col>
            <Col><Ccard text={"dog"} color={"brown"}/></Col>            
        </Row>
          <Row>
            <Col><Ccard text={"free"} color={"yellow"}/></Col>
            <Col><Ccard text={"pig"} color={"pink"}/></Col>
            <Col><Ccard text={"cat"} color={"orange"}/></Col>            
        </Row>
      </Container>
      </div>
  );
}

export default App;





















