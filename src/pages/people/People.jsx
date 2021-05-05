import React from 'react';
import Wrapper from "../../components/wrapper/Wrapper";
import IdCard from "../../components/idCard/IdCard";
import {useHistory} from 'react-router-dom';

const People = () => {
    const history = useHistory();

    const onClick = (name) => {
        // people/Ana
        history.push(`/people/${name}`)
    }

    return <>
        <Wrapper>
            <IdCard name="Ana" surname="Markovic" onClick={() => onClick("Ana")}/>
            <IdCard name="Marko" surname="Markovic" onClick={() => onClick("Marko")}/>
            <IdCard name="Nikola" surname="Markovic" onClick={() => onClick("Nikola")}/>
        </Wrapper>
    </>
}

export default People;