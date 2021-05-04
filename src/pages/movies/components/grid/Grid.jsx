import React, {useContext, useEffect, useState} from 'react';
import MoviesData from "../../../../contexts/MoviesData";
import useDebounce from "../../../../customHooks/useDebouceHook";
import TableComponent from "../../../../components/table/Table";

const Grid = ({onRowClick}) => {
    const {list, dispatch} = useContext(MoviesData);
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 400);
    const header = ['Id', 'Naslov', 'Godina'];

    useEffect(() => {
        if(searchValue.length > 2){
            dispatch({type: 'filter', data: debouncedValue})
        }
    }, [debouncedValue])

    return <div>
        <input value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}/>
        <TableComponent header={header} rows={list} onRowClick={onRowClick}/>
            </div>;
}

export default Grid;