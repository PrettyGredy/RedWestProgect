import React from "react";
import "./SpinerStyle.scss"

export default function Spiner() {
    return (
        //     <svg id="svg1" width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path
        //             d="M0 84.9278C0 38.0236 38.0558 0.000228882 85 0.000228882C131.944 0.000228882 170 38.0236 170 84.9278C170 131.832 131.944 169.855 85 169.855C38.0558 169.855 0 131.832 0 84.9278ZM153 84.9278C153 47.4045 122.555 16.9857 85 16.9857C47.4446 16.9857 17 47.4045 17 84.9278C17 122.451 47.4446 152.87 85 152.87C122.555 152.87 153 122.451 153 84.9278Z"
        //             fill="#E3E3E3"/>
        //         <path id="check" stroke-dasharray="855" stroke-dashoffset="855" stroke="black"
        //               d="M85 8.493C85 3.80257 88.812 -0.0437317 93.4791 0.423706C109.981 2.07649 125.708 8.52698 138.665 19.0668C153.826 31.3997 164.269 48.5775 168.234 67.7056C172.199 86.8337 169.442 106.743 160.43 124.077C151.418 141.412 136.7 155.113 118.758 162.871C100.815 170.628 80.7441 171.969 61.9276 166.667C43.111 161.365 26.699 149.743 15.4573 133.762C4.21558 117.78 -1.16853 98.4148 0.212265 78.9297C1.3923 62.2775 7.45145 46.4077 17.5418 33.2572C20.3967 29.5365 25.8086 29.3908 29.2286 32.5996C32.6528 35.8124 32.7718 41.1667 30.0083 44.9627C22.5508 55.2066 18.0732 67.3814 17.1698 80.1293C16.0652 95.7174 20.3725 111.21 29.3658 123.995C38.3592 136.78 51.4888 146.077 66.542 150.319C81.5953 154.561 97.6519 153.488 112.006 147.282C126.36 141.076 138.134 130.115 145.344 116.247C152.554 102.38 154.759 86.4525 151.587 71.1501C148.415 55.8476 140.061 42.1053 127.932 32.239C118.009 24.1672 106.055 19.0934 93.471 17.5149C88.8171 16.9311 85 13.1834 85 8.493Z"
        //               fill="red" >
        //
        //         <animate id="p1" attributeName="stroke-dashoffset" begin="svg1.click"
        //                  values="855; 0" dur="10s" repeatCount="1" fill="freeze" calcMode="linear"/>
        //     </path>
        //
        //         {/*<path id="check" fill="none" stroke="black" stroke-dasharray="1855"*/}
        //         {/*      stroke-dashoffset="1855" d="M113.5 57.7l-8.5-11.4 ...  86.3 72.8z">*/}
        //
        //     </svg>
        //     <svg id="svg1" viewBox="0 0 120 120" version="1.1"
        //          xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="60" cy="60" r="40"  stroke-dasharray="260" stroke-dashoffset="260" stroke="black"  stroke-width="10"  stroke-linecap="round"
        // fill="none" >
        //     <animate id="p1" attributeName="stroke-dashoffset" begin="svg1.click"
        // values="260; 110" dur="6s" repeatCount="1" fill="freeze" calcMode="linear"/>
        //     </circle>

        <svg id="svg1" className="spiner" width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 84.9278C0 38.0236 38.0558 0.000228882 85 0.000228882C131.944 0.000228882 170 38.0236 170 84.9278C170 131.832 131.944 169.855 85 169.855C38.0558 169.855 0 131.832 0 84.9278ZM153 84.9278C153 47.4045 122.555 16.9857 85 16.9857C47.4446 16.9857 17 47.4045 17 84.9278C17 122.451 47.4446 152.87 85 152.87C122.555 152.87 153 122.451 153 84.9278Z"
                fill="#E3E3E3"/>
            <circle cx="85" cy="85" r="76" stroke-dasharray="855" stroke-dashoffset="855" stroke="black"
                    stroke-width="16" stroke-linecap="round"
                    fill="none">
                <animate id="p1" attributeName="stroke-dashoffset" begin="svg1.click"
                         values="855; 660" dur="2s" repeatCount="1" fill="freeze" calcMode="linear"/>
            </circle>
        </svg>
    )
}