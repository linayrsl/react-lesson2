import React from "react";

export  function DayOfWeek(props) {
    const days = ["sunday", "monday", "thursday"];
    return (
            <div>{
                days[props.day]
            }
            </div>
    )
}