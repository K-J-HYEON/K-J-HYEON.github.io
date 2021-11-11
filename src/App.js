/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useContext, useState, lazy, Suspense } from "react";
import Data from "./data.js";
// import Detail from "./Detail.js";
let Detail = lazy(()=> import('./Detail.js'));


import axios from 'axios';
import { Link, Route, Switch, useHistory } from "react-router-dom";





import {connect} from 'react-redux';

import Cart from './Cart.js';

export let 재고context = React.createContext();






function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);


  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Jay's Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <Nav.Link href="#pricing">Dropdown</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>

      {/* {name2} */}

      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <div className="background">
              <h1 class="display-4">30% Season Off</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr class="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="container">
            


            <div className="row">
              {
                shoes.map((a, i) => {
                  return (<Card shoes={shoes[i]} i={i} key={i} />)
                })
              }
            </div>

            


            <button className="btn btn-primary" onClick={()=>{

              axios.post('서버URL', { id: 'codingapple', pw: 1234}).then()
              // 로딩중이라는 UI 띄움




              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // 로딩중이라는 UI 안보이게처리
                console.log(result.data);
                shoes변경([...shoes, ...result.data ]);

              })
              .catch(()=>{
                // 로딩중이라는 UI 안보이게처리
                console.log('실패했어요')
              })

            }}>더보기</button>
          </div>
        </Route>


        <Route path="/detail/:id">

          <재고context.Provider value={재고}>
            <Suspense fallback={<div>로딩중이에요</div>}>
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
            </Suspense>
          </재고context.Provider>

        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>



        <Route path="/:id">
          <div>아무거나적었을때 이거 보여주셈</div>
          {/* <Detail shoes={shoes} /> */}
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {


  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.
    id) }}>


      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{ props.shoes.title }</h4>
      <p>
        { props.shoes.content } & { props.shoes.price }
      </p>
      <Test></Test>
    </div>
  )
}
function Test() {
  let 재고 = useContext(재고context);
  // return <p>{재고[0]}</p>
  return <p>{재고}</p>
}


export default App;
