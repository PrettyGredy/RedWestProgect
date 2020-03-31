import React from "react";
import "../EvidenceStyle.css"
import PropTypes from "prop-types"
import Spiner from "./Spiner/Spiner";


export default function EvidenceSlave({ClassName, ClassNameSpiner, count, title}) {
    return (
        <div className={ClassName} >
            <Spiner ClassNameSpiner={ClassNameSpiner}/>
            <h2>{count}</h2>
            <h5>{title}</h5>
        </div>
    )
}

EvidenceSlave.defaultProps = {
    className: '',
}

EvidenceSlave.propTypes = {
    ClassNameSpiner: PropTypes.string,
    ClassName: PropTypes.string,
    title:  PropTypes.string,
    count: PropTypes.string
}