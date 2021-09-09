import React from "react";
import NameCard from "../../NameCard/NameCard";
import './Results.css';

const Results = ({ suggestedNames }) =>{

    const Names = suggestedNames.map((suggestedName) =>{
        return <NameCard key={suggestedName} suggestedName = {suggestedName}/>
    }) 

    return(
        <div className="result-box">{Names} </div>

    );
};

export default Results;