import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import svg1 from "./assets/1.png";
import svg2 from "./assets/2.png";
import svg3 from "./assets/3.png";
import svg4 from "./assets/4.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Carou() {
  return (
    <div className="carousel">
      <h1 style={{ color: "blue", marginLeft: "500px" }}> </h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><h3 style={{marginLeft:"30px"}}>One</h3>
          <img  style={{ height:"250px",marginLeft:"16px",marginTop:"50px"}}src={svg1} alt="icon image" />

          </Item>
          <Item>
          <h3 style={{marginLeft:"30px"}}>Two</h3>
          <img  style={{ height:"250px",marginLeft:"18px",marginTop:"20px"}}src={svg2} alt="icon image" />
          </Item>
          <Item>
          <h3 style={{marginLeft:"30px"}}>Three</h3>
          <img  style={{ height:"250px",marginLeft:"1px",marginTop:"70px"}}src={svg3} alt="icon image" />
          </Item>
          <Item>
          <h3 style={{marginLeft:"50px"}}>Four</h3>
          <img  style={{ height:"250px",marginLeft:"1px",marginTop:"40px"}}src={svg4} alt="icon image" />
          </Item>
        </Carousel>
      </div>
    </div>
  );
}
