import React from "react";

const CurrentDate = function() {
    return <h2>{new Date().toLocaleDateString()}</h2>
}

export default CurrentDate;