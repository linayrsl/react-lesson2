import React from "react";
import "./Main.css";
import {Sidebar} from "../Sidebar/Sidebar";
import {Content} from "../Content/Content";

export class Main extends React.Component {
    render() {
        return (
            <div className={"Main"}>
                <Sidebar />
                <Content />
            </div>
        );
    }
}