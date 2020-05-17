import React from "react";
import "./menuItem.css";

export class MenuItem extends React.Component {
    render() {
        return(
            <li className={"Menu"}>
                {this.props.children}
            </li>
        );
    }
}
