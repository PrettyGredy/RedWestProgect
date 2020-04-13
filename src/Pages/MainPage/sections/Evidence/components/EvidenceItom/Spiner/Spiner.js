import React from "react";
import "./SpinerStyle.scss"
import PropTypes from "prop-types"

export default function Spiner({maxCount}) {
    return (
        <svg id="svg1" className="spiner" width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 84.9278C0 38.0236 38.0558 0.000228882 85 0.000228882C131.944 0.000228882 170 38.0236 170 84.9278C170 131.832 131.944 169.855 85 169.855C38.0558 169.855 0 131.832 0 84.9278ZM153 84.9278C153 47.4045 122.555 16.9857 85 16.9857C47.4446 16.9857 17 47.4045 17 84.9278C17 122.451 47.4446 152.87 85 152.87C122.555 152.87 153 122.451 153 84.9278Z"
                fill="#E3E3E3"/>
            <circle cx="85" cy="85" r="76" stroke-dasharray="855" stroke-dashoffset="855" stroke="#B2B2B2"
                    stroke-width="16" stroke-linecap="round"
                    fill="none">
                <animate attributeName="stroke-dashoffset" begin="1s"
                         values={`855; ${maxCount}`} dur="2s" repeatCount="1" fill="freeze" calcMode="linear"/>
            </circle>
        </svg>
    )
}

Spiner.propTypes = {
    maxCount: PropTypes.string
}