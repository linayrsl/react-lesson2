import React from "react";
import "./RandomColorSquare.css";

export class RandomColorSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squareColor: this.getRandomColor()
        };
        this.handleClick = this.handleClick.bind(this);
    }

    getRandomColor() {
        const maxColorValue = parseInt("FFFFFF", 16);
        const randomColorDecimal = Math.floor(Math.random() * maxColorValue);
        const randomColor = randomColorDecimal.toString(16);
        return randomColor;
    }

    handleClick = (event) => {
        this.setState({squareColor: this.getRandomColor()});
    }

    render() {
        return(
            <div className={"RandomColorSquare"}
                 onClick={this.handleClick}
                 style={{backgroundColor: "#" + this.state.squareColor}}>
            </div>
        );
    }
}