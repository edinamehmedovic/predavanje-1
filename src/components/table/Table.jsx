import React from 'react';
import "./Table.css";

//header = [ 'title 1', 'title 2', ... ]
// rows = [
//  { value, value2}
// ]

const Table = ({header, rows}) => {
    return <table className="container">
                <tr className="table-header">
                    {
                        Array.isArray(header) &&
                            header.map((item, index) => {
                                return <th key={index}>{item}</th>
                            })
                    }
                </tr>
        { Array.isArray(rows) &&
            rows.map(row => {
                console.log((Object.values(row)));
                return <tr className="table-row" key={row?.id}>
                    {Object.values(row).map((item, index) =>  <td key={index}>{item}</td>)}
                            </tr>
            })
        }
            </table>
}

export default Table;