import React from "react";
import './section2.css';

export default function Section2() {
    return (
        <>
            <div className="section-second">
                <h2 className="heading">How Does It <span className="text-blue">Work?</span></h2>
                <div className="container-desc">
                    <div className="card">
                        <div className="card-head">
                            <div className="div-image">
                                <img src="../../../images/gjp-payment.png" />
                            </div>
                            <h2>Zero UpFront <br />Fee</h2>
                        </div>
                        <ul>
                            <li>Avail the best programming course towards your upward career path</li>
                            <li>Pay absolutely nothing until you get hired. </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <div className="div-image">
                                <img src="../../../images/gjp-study.png" />
                            </div>
                            <h2>Study with <br />Guaranteed <br /> Job Program</h2>
                        </div>
                        <ul>
                            <li>Get equipped with the highest paying skills in demand</li>
                            <li>Boost your career with the expert mentorship.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <div className="div-image">
                                <img src="../../../images/gjp-assistance.png" />
                            </div>
                            <h2>Guaranteed <br />Placement <br /> Assistance.</h2>
                        </div>
                        <ul>
                            <li>Get interviewed by the best recruiters from the tech giants.</li>
                            <li>Stay ahead of the pack by earning a lucrative salary.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}