import react from "react";

const CurrentTime = function() {
    return(
        <h2>{new Date().toLocaleTimeString()}</h2>
    )
}

export default CurrentTime;