import React from "react";

import "./styles.css"
import pic1 from "./assets/icons8-cancel-100.png";
import pic2 from "./assets/icons8-dribbble-100.png";
import pic3 from "./assets/icons8-instagram-100.png";
import pic4 from "./assets/icons8-myspace-100.png";
import pic5 from "./assets/icons8-reddit-100.png";
import pic6 from "./assets/icons8-tinder-100.png";

class Options extends React.Component {
  constructor() {
    super();
    this.state = {
      tools: [
        {
          icon: pic1,
          heading: "cloud computing",
          description: "this is 1st description",
        },
        {
          icon: pic2,
          heading: "pro mode",
          description: "this is 2nd description",
        },
        {
          icon: pic3,
          heading: "free backtests",
          description: "this is 3rd description",
        },
        {
          icon: pic4,
          heading: "security",
          description: "this is 4th description",
        },
        {
          icon: pic5,
          heading: "no subscription",
          description: "this is 5th description",
        },
        {
          icon: pic6,
          heading: "responsive",
          description: "this is 6th description",
        },
      ],
    };
  }

  render(){
 
  
    const items=   this.state.tools.map((item) => {
         return(
    <div className="card">
    <img src={item.icon} alt="icon image" />
    
    <h1>{item.heading}</h1>
    <p>{item.description}</p>
    
    </div>
         )
       })
       return(
    <div className="grid">
    {items}
      </div>
       )
    
    }
    
}

export default Options;