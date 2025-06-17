import { fetchSearch } from "../store/api"

export const INCREMENT = "INCREMENT";
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const SET_BOOKS = "SET_BOOKS";


export const incrementCounter = () => {
    return {type: INCREMENT}
}
export const decrementCounter = () => {
    return {type: DECREMENT}
}
export const addCounter = (amount) => {
    return {type: ADD, amount}
}
export const substractCounter = (amount) => {
    return {type: SUBTRACT, amount}
}

export const setBooks = (data) => {
    return {type: SET_BOOKS, data}
}

export const searchBooks = async (payload) => {
    const response = await fetchSearch(payload);
     if (response && response.data) {
           setBooks(response.data)
        }
    
}
     
