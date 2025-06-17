import { connect } from "react-redux";
import { incrementCounter, decrementCounter, addCounter, substractCounter } from '../../store/actions'


const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(incrementCounter()),
        decreaseCounter: () => dispatch(decrementCounter()),
        addCounter: () => dispatch(addCounter(5)),
        substarctCounter: () => dispatch(substractCounter(5)),
    }
}

const Counter = (props) => {


    return(
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increaseCounter}>increase</button>
            <button onClick={props.decreaseCounter}>decrease</button>
            <button onClick={props.addCounter}>increase by 5</button>
            <button onClick={props.substarctCounter}>decrease by 5</button>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);