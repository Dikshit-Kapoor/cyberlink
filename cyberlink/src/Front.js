import React from "react";
import "./front.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import GavelIcon from "@material-ui/icons/Gavel";
import PaymentIcon from "@material-ui/icons/Payment";
import ChatIcon from "@material-ui/icons/Chat";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Front() {
  return (
    <div className="front">
      <h2>Falcons.io</h2>
      <div className="frontright">
        <TelegramIcon fontSize="medium" />
        <TwitterIcon />
        <ChatIcon />
        <p>Marketplace</p>
        <p>Pricing</p>
        <p>Team</p>
        <p>Blog</p>
        <p>FAQ</p>
        <Button variant="outlined">Login</Button>
      </div>
      <br />
      <div className="frontmiddle">
        <p>
          <h4>AUTOMATE YOUR TRADES 24/7 3 </h4>
          <br />
          tools that make Kryll the most complete crypto trading platform on the
          market
        </p>
      </div>
      <br /> <br />
      <br />
      <br /> <br />
      <div className="frontmiddle2">
        <GavelIcon fontSize="large" />
        <b> Drag'n Drop</b>
        <br />
        <br /> <br />
        <ShoppingCartIcon fontSize="large" />
        <b>Market Place</b>
        <br />
        <br />
        <br />
        <br />
        <PaymentIcon fontsize="large" />
        <b>Smart Trading</b>
        <br />
        <br />
      </div>
      <div className="button">
        <Button variant="contained" size="large" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}
