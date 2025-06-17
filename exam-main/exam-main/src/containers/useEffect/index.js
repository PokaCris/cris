import { useEffect, useState } from "react";
import { searchBooks } from "../../store/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        data: state.books.books
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increaseCounter: () => dispatch(incrementCounter()),
//         decreaseCounter: () => dispatch(decrementCounter()),
//         addCounter: () => dispatch(addCounter(5)),
//         substarctCounter: () => dispatch(substractCounter(5)),
//     }
// }

const UseEffect = (props) => {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState({});
    const [list, setList]= useState(null);

   
    const onChange = (e) => {
        setSearchText(e.target.value);
    }
    const search = () => {
        let url= '/search.json?q='
        let text = searchText
        if(text.length > 0) {
            text.split(' ').join('+');
            url += text;

            searchBooks(url)
            // axios.get(url).then(res=>{
            //     setResult(res.data);
            // })
        }
    }
    useEffect(()=>{
        if (props.data && props.data.docs) {
        let list = props.data.docs.map(item => {
            return (
                <li key={item.key}>
                    <div>
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}/>
                    </div>
                    <div>
                        <span>Author: {item.author_name}</span>
                        <br/>
                        <span>Book title: {item.title}</span>
                    </div>
                </li>
            )
        })
        setList(list)}

    },[result])
    
    return (
        <div>
            <label>
                search book 
                <input onChange={onChange}/>
                <button onClick={search}>search</button>
            </label>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps)(UseEffect) ;