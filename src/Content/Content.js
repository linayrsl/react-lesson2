import React from "react";
import "./Content.css";
import {Collapsible} from "./collapsible/collapsible";
import {RandomColorSquare} from "./RandomColorSquare/RandomColorSquare";

export class Content extends React.Component {

    render() {
        return (
            <div className={"Content"}>
                <Collapsible
                    header={"This is the header"}>
                    This is the content<br />
                    This is the content
                </Collapsible>
                <Collapsible
                    header={"This is the header2"}>
                    This is the content2<br />
                    This is the content2
                </Collapsible>
                <RandomColorSquare />
            </div>
        );
    }
}