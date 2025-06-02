import React from "react";
import useLocation from "react-router-dom";

const TestComponent = function(props) {
    const location = useLocation();
    const queryParams = newURLSearchParams(location.search);
    const param1 = queryParams.get('color');
    const param2 = queryParams.get('year');
    const param3 = queryParams.get('test');
    const { id } = useParams()
    
    console.log(location, queryParams, param1, param2, param3)

    return(
    <div>
        queryString
        {/* <h2>ID = {props.match.param.id}</h2> */}
    </div>
    )
}

export default TestComponent;