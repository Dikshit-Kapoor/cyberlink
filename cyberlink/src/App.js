import React from "react";
import Front from "./Front";
import "./index.css";
import Carou from "./Carou";
import Options from "./Options";
import { motion } from "framer-motion";
const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = 2;
import ReactLogo from "./logo.svg";

export default function App({ img, className }) {
  return (
    <div className="app">
     <div >
        <Front />
      </div><br />
      <br />
      
      <div >
        <Carou />
      </div>
      <br />
      <br />
      <div className="hello">
        <h2>
          STOP-LOSS TAKE-PROFIT, THE EASY WAY: SMART TRADING Easily follow
          signals from Callers, setup trade in a few clicks and enjoy profits!
          Phone Easily follow signals from Callers, setup trade in a few clicks
          and enjoy profits
        </h2>
        <button tyoe="submit">Start for free</button>
      </div>
      
      <div className="image">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [-2, 0, 2] }}
          className={className ? className : undefined}
          transition={{
            duration: TRANSITION_TIME_OPACITY_S,
            rotate: { yoyo: Infinity, duration: TRANSITION_TIME_ROTATE_S }
          }}
        >
          <img src={ReactLogo} style={{}} />
        </motion.div>
      </div>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/>

      <div id="options">
    <Options />
    </div> 
      
    </div>
    
  );
}
