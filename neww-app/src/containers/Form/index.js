import React,{ useState } from "react";


const Form = (props) => {
    let uRef = React.createRef();
    const submitHandler = (e) => {
        e.preventDefault();
        //let uName = document.querySelector('#userName')
        console.log(uRef.current.value)
    }

    const [lastName, setLastName] = useState('');
    const changeHandler = (e) => {
        console.log(e);
        setLastName(e.target.value);
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        console.log(lastName);
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" id='userName' ref={uRef}/>
            <button type="submit">Click</button>
        </form>    

        <div>
            <input type='text' id='lastName' value={lastName} onChange={changeHandler} />
            <button onClick={buttonHandler}> Click </button>
        </div>

        </>
    )

    
}

export default Form;