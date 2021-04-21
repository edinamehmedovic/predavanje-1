import React from 'react';
import "./Table.css";

const Table = () => {
    return <table className="container">
                <th className="table-header">
                    <td>Ime</td>
                    <td>Prezime</td>
                </th>
                <tr className="table-row">
                    <td>Ime 1</td>
                    <td>Prezime 1</td>
                </tr>
                <tr className="table-row">
                    <td>Ime 2</td>
                    <td>Prezime 2</td>
                </tr>
            </table>
}

export default Table;