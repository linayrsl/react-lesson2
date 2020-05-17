import React from "react";
import "./Sidebar.css";
import {Menu} from "./menu/menu";
import {MenuItem} from "./menu/menuItem/menuItem";

export class Sidebar extends React.Component {
    render() {
        return (
            <div className={"Sidebar"}>
                <Menu>
                    <MenuItem>
                        <a href={"#"}>Item one</a>
                    </MenuItem>
                    <MenuItem>
                        <a href={"#"}>Item two</a>
                    </MenuItem>
                    <MenuItem>
                        <a href={"#"}>Item three</a>
                    </MenuItem>
                    <MenuItem>
                        <a href={"#"}>Item four</a>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}