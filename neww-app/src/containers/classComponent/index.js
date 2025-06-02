import React from "react";

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentValue: props.starValue
        };
    }


render() {
    const clickHandler = () => {
        this.setState({
            currentValue: this.state.currentValue + this.props.inValue
        })
    }

    let style = {color: 'navy', background: 'lime', fontSize: '20px', padding: '10px', marginTop: '5px', borderRadius: '10px', width: '300px', marginLeft: '10px'}

    return(
        <button style={style} onClick={clickHandler}>Najmite <br /> Colichestvo clickov {this.state.currentValue}</button> 
    )
};

}

export default ClassComponent;