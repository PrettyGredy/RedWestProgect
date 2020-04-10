import React from "react";
import "./EvidenceItomStyle.scss"
import PropTypes from "prop-types"
import GR9 from "./images/Group 9-1.svg"
import Spiner from "./Spiner/Spiner";


export default function EvidenceItom({type, count, title}) {
    let Class;
     switch (type) {
         case (1): Class="Spiners n1"; break;
         case (2): Class="Spiners n2"; break;
         case (3): Class="Spiners n3"; break;
         case (4): Class="Spiners n4"; break;
     }

    return (
        <div className="Evidence_Slave">
            <Spiner/>
            <h2>{count}</h2>
            <h5>{title}</h5>
        </div>
    )
}

EvidenceItom.defaultProps = {
    className: '',
}

EvidenceItom.propTypes = {
    type: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.string
}