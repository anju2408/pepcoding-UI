import React from "react";
import './asideLeft.css';

export default function AsideLeft() {
    return (
        <>
            <div className="asideLeft">
                <h1>Become a <span>Full Stack <br />Developer</span></h1>
                <h2>Learn. Earn. It's Your Turn.</h2>
                <div>
                    <h2 className="heading-msg">0% Upfront fee</h2>
                    <h2 className="sub-heading">Guaranteed placement</h2>
                </div>
                <div className="divButton">
                    <button className="btnApply">APPLY NOW</button>
                </div>
            </div>
        </>
    )
}