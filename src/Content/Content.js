import React from "react";
import "./Content.css";

export class Content extends React.Component {

    handleClick() {
        console.log("clicked");
    }
    render() {
        return (
            <div className={"Content"}>
                Content
            </div>
        );
    }
}