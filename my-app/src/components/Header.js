import React from 'react';
import './header.css';

export default function Header(){
    return(
        <>
        <div className='header'>
            <div className='divLeft'>
                <a href='https://www.pepcoding.com/' className='brand-logo'>
                <img src='../../images/logo2.png' className='logo' />
                </a>
            </div>
            <div className='divRight'>
                <ul>
                    <li>
                        <a href='#'>Trainings</a>
                    </li>
                    <li>
                        <a href='#'>Guaranteed Job Program <sup>New</sup></a>
                    </li>
                    <li>
                        <a href='#'>NADOS</a>
                    </li>
                    <li>
                        <a href='#'>Resources</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}