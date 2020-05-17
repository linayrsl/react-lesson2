import React from "react";
import "./menu.css";
import {MenuItem} from "./menuItem/menuItem";

export class Menu extends React.Component {
    render() {
        return(
            <nav className={"Menu"}>
                <ul>{this.props.children}</ul>
            </nav>
        );
    }
}