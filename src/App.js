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
        } else if (props.on.includes(props.text)) {
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
    const [items, setItems] = useState();
    const [place, setPlace] = useState();
    const [show, setShow] = useState([]);        

    const setter = (arg,pos) => {
        if ((items === arg) && (pos !== place)) {
            setShow([...show, arg]);
        }
        setItems(arg);
        setPlace(pos);        
    }

    return (
      <div className="App">
        <Container>
          <Row>
            <Col onClick={() => setter("pig",1)}><Ccard on={show} text={"pig"} color={"pink"}/></Col>
            <Col onClick={() => setter("dog",2)}><Ccard on={show}  text={"dog"} color={"brown"}/></Col>
            <Col onClick={() => setter("frog",3)}><Ccard on={show} text={"frog"} color={"chartreuse"}/></Col>          
          </Row>
          <Row>
            <Col onClick={() => setter("frog",4)}><Ccard  on={show} text={"frog"} color={"chartreuse"}/></Col>                      
            <Col onClick={() => setter("cat",5)}><Ccard  on={show} text={"cat"} color={"orange"}/></Col>
            <Col onClick={() => setter("chick",6)}><Ccard  on={show} text={"chick"} color={"yellow"}/></Col>            
          </Row>
          <Row>
            <Col onClick={() => setter("dog",7)}><Ccard  on={show} text={"dog"} color={"brown"}/></Col>            
            <Col onClick={() => setter("pig",8)}><Ccard  on={show} text={"pig"} color={"pink"}/></Col>
            <Col onClick={() => setter("cat",9)}><Ccard  on={show} text={"cat"} color={"orange"}/></Col>            
          </Row>
          <Row>
            <Col onClick={() => setter("fish",10)}><Ccard  on={show} text={"fish"} color={"aqua"}/></Col>
            <Col onClick={() => setter("chick",11)}><Ccard  on={show} text={"chick"} color={"yellow"}/></Col>
            <Col onClick={() => setter("fish",12)}><Ccard  on={show} text={"fish"} color={"aqua"}/></Col>            
          </Row>
      </Container>
      </div>
  );
}

export default App;





















