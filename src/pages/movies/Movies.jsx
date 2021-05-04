import React, {useState, useReducer} from 'react';
import Grid from "./components/grid/Grid";
import Form from "./components/form/Form";
import "./Movies.css";
import movies from "../../constants/movies";
import MoviesData from "../../contexts/MoviesData";
import Button from 'react-bootstrap/Button'

const changeMovies = (state, action) => {
    switch(action.type){
        case 'filter':
            return  action.data.length > 0 ? movies.filter(item => item.title.includes(action.data)) : movies;
        case 'add':
            const newId = movies.length;
         return [...movies, {id: newId, title: action.data.title, year: action.data.year}]
        case 'edit':
            // action.data {id, title, year}
            return state.map(item => {
                if(item.id === action.data.id){
                    return action.data
                }
                return item;
            });
        default:
            return ;
    }
}

const Movies = () => {
    const [isGridInView, setIsGridInView] = useState(true) // grid - form
    const [moviesList, dispatch] = useReducer(changeMovies, movies);
    const [selectedRow, setSelectedRow] = useState({});

    const onRowClick = (e) => {
        console.log(e)
        setSelectedRow(e);
        setIsGridInView(false);
    }

    return <MoviesData.Provider value={{
        list: moviesList,
        dispatch: (e) => dispatch(e)}}>
    <div className="container">
        <div>
            <Button variant="dark"  onClick={() => setIsGridInView(true)}>Prikazi filmove</Button>
            <Button variant="dark"  onClick={() => setIsGridInView(false)}>Dodaj novi film</Button>
            <Button variant="dark"  onClick={() => setIsGridInView(false)}>Izmijeni film</Button>
        </div>
        <div>
            {
                isGridInView ?
                    <Grid onRowClick={onRowClick}/>
                    :
                    <Form returnToGrid={() => {
                        setIsGridInView(true);
                        setSelectedRow({});
                    }} data={selectedRow}/>
            }
        </div>
    </div>
    </MoviesData.Provider>
}

export default Movies;