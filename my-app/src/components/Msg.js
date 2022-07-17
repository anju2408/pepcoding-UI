import React from "react";
import './msg.css';

export default function Msg() {
    return (
        <>
            <div className="whatsapp-icon">
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
            <div className="send-msg">
                <button className="btn-send-msg">Send message</button>
            </div>
        </>
    )
}