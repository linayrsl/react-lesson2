import React from "react";
import "./collapsible.css";

export class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <section className={"Collapsible"}>
                <header className={"collapsible-header"} onClick={this.handleClick.bind(this)}>{this.props.header}</header>
                {this.state.isOpen ? <div className={"collapsible-content"}>{this.props.children}</div> : null}
            </section>
        );
    }
}