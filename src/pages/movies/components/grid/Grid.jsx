import React, {useContext, useEffect, useState} from 'react';
import MoviesData from "../../../../contexts/MoviesData";
import Table from "../../../../components/table/Table";
import useDebounce from "../../../../customHooks/useDebouceHook";

const Grid = () => {
    const {list, dispatch} = useContext(MoviesData);
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 400);
    const header = ['Id', 'Naslov', 'Godina'];

    useEffect(() => {
        if(debouncedValue && debouncedValue.length > 3){
            dispatch({type: 'filter', data: debouncedValue})
        }
    }, [debouncedValue])

    return <div>
        <input value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}/>
        <Table header={header} rows={list}/>
            </div>;
}

export default Grid;