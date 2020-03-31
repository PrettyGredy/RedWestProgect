import React from "react";
import "./SpinerStyle.scss";
import PropTypes from "prop-types"

export default function Spiner({ClassNameSpiner}) {
    return (
                <div className={ClassNameSpiner}> </div>
    )
}

Spiner.defaultProps = {
    className: '',
}

Spiner.propTypes = {
    ClassNameSpiner: PropTypes.string
}