import React, {useState, useReducer} from 'react';
import Grid from "./components/grid/Grid";
import Form from "./components/form/Form";
import "./Movies.css";
import movies from "../../constants/movies";
import MoviesData from "../../contexts/MoviesData";

const changeMovies = (state, action) => {
    switch(action.type){
        case 'filter':
            return state.filter(item => item.title.includes(action.data));
        // case 'edit':
            // action.data {id, title, year}
            // return state.map(item => {
            //     if(item.id === action.data.id){
            //         return action.data
            //     }
            //     return item;
            // });
        // case 'add':
            // state.push(action.data)
            // {} =>  {... oldData, title: '...'}
            // [] => [..oldArray, newValue]
            //  return [...state, action.data]
        default:
            return ;
    }
}

const Movies = () => {
    const [isGridInView, setIsGridInView] = useState(true) // grid - form
    const [moviesList, dispatch] = useReducer(changeMovies, movies)

    return <MoviesData.Provider value={{
        list: moviesList,
        dispatch: (e) => dispatch(e)}}>
    <div className="container">
        <div>
            <button onClick={() => setIsGridInView(true)}>Prikazi filmove</button>
            <button onClick={() => setIsGridInView(false)}>Dodaj novi film</button>
            <button onClick={() => setIsGridInView(false)}>Izmijeni film</button>
        </div>
        <div>
            {
                isGridInView ?
                    <Grid/>
                    :
                    <Form/>
            }
        </div>
    </div>
    </MoviesData.Provider>
}

export default Movies;