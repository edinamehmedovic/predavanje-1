import React from 'react';
// import logo from "./logo192.png";

const MyImage = ({src}) => {
    return <div>
    <img src={`/images/${src}`} alt="Nesto"/>
    {/*<img src="/images/logo192.png" alt="Nesto"/>*/}
    </div>
}

export default MyImage;