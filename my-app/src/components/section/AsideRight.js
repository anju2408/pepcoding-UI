import React from 'react';
import './asideRight.css';

export default function AsideRight() {
    return (
        <>
            <div className='asideRight'>
                <form className='form'>
                    <div className='form-header'>
                        <h1>Book a <span>FREE</span> trial class.</h1>
                    </div>
                    <div className='form-body'>
                        <div className='input-field'>
                            <label>Email ID <span className='red-text'>*</span></label>
                            <input type="email" />
                        </div>
                        <div className='input-field'>
                            <label>Graduation Year <span className='red-text'>*</span></label>
                            <input type="number" />
                        </div>
                        <div className='input-field'>
                            <label>Mobile Number <span className='red-text'>*</span></label>
                            <div className='input-mob'><input type="number" className='input-small' />
                                <input type="number" className='input-big' /></div>
                        </div>
                        <div className="divButtonBook">
                            <button className="btnBook">BOOK YOUR LIVE SESSION</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}