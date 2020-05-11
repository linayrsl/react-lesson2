import React from "react";
import "./Product.css";

export class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"Product"}>
                <h1>{this.props.title}</h1>
                <p>{this.props.children}</p>
                <div>${this.props.price}</div>
            </div>
        );
    }
}
