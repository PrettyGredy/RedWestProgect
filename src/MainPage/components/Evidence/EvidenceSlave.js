import React from "react";
import "./EvidenceStyle.css"
import PropTypes from "prop-types"
import Spiner from "./components/Spiner";

export default function EvidenceSlave({ClassName, count, title}) {
    return (
        <div className={ClassName} >
            <Spiner/>
            <h2>{count}</h2>
            <h5>{title}</h5>
        </div>
    )

}

EvidenceSlave.defaultProps = {
    className: '',
}

EvidenceSlave.propTypes = {
    ClassName: PropTypes.string,
    title:  PropTypes.string,
    count: PropTypes.string
}