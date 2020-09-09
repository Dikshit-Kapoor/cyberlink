import React from "react";
import Tools from "./Tools";
import "./options.css"
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

  render() {
    const tools = this.state.tools.map((item) => {
      return (
        <Tools
          icon={item.icon}
          heading={item.heading}
          desc={item.description}
        />
      );
    });

    return (
      <div>
        <div className="center">
          <h1>
            Advanced & complete tool helping you
            <br /> make profitable trades
          </h1>
        </div>

        <div className="grid">{tools}</div>
      </div>
    );
  }
}

export default Options;