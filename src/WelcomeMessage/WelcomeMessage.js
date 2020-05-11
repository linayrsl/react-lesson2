import React from "react";
import './WelcomeMessage.css';

export function WelcomeMessage(props) {
    return (
      <div className={"WelcomeMessage"}>
          Welcome {props.name}!
      </div>
    );
}
