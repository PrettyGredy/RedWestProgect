import React from "react";
import "./EvidenceItomStyle.scss"
import PropTypes from "prop-types"
import Spiner from "./Spiner/Spiner";


export default function EvidenceItom({count, title}) {
    let maxC;
    if (count>1000) {maxC=400}
    if (count<800) {maxC=825}
    if ((count<800)&&(count>400)) {maxC=615}
    if ((count<1000)&&(count>800)) {maxC=500}

    return (
        <div className="evidence-slave">
            <Spiner maxCount={maxC}/>
            <h2>{count}</h2>
            <h5>{title}</h5>
        </div>
    )
}

EvidenceItom.propTypes = {
    title: PropTypes.string,
    count: PropTypes.string
}