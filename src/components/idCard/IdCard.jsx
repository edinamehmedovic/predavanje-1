import React from 'react';
import MyImage from "../myImage/MyImage";

//props
// {name, surname, city}
//{name, surname, city='Podgorica', src}

const IdCard = ({name, surname, city='Podgorica', image, childElement: ChildElement,
                    onClick}) => {

    const parentName = 'Edina';
    return <div>
        <div>Ime: {name}</div>
        <div>Prezime: {surname}</div>
        <div>Grad: {city}</div>
        <div>Slika: {image}</div>
        <div><ChildElement parentName={parentName}/></div>
        <button onClick={() => onClick && onClick()}>Click me!</button>
    </div>
}

export default IdCard;