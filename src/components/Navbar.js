import React from 'react';
import style from '../css/navbar.module.css';
import logo from '../assets/logo.png';
import Search from '../assets/svg/search';
import { ConnectButton } from 'web3uikit';

export default function Navbar() {
    return (
        <>
            <div className={`container-fluid py-4 ${style.header} ${style.redBorder}`}>
                <div className={`row ${style.blueBorder} justify-content-around align-items-center`}>
                    {/* logo */}
                    <div className={`col-md-2 ${style.yellowBorder}`} style={{ padding: '0 0' }}>
                        <img src={`${logo}`} alt="logo" className={`${style.logo} ${style.redBorder}`} />
                    </div>

                    {/* menu bar */}
                    <div className={`col-md-10 ${style.yellowBorder}`}>

                        <div className={`row ${style.blueBorder}`}>
                            <div className={`col-md-7 ${style.yellowBorder}`} style={{ padding: '0 0' }}>
                                <ul className={`mx-auto ${style.redBorder}`}>
                                    <li className='ms-md-3'> <a href="/">Cryptocurrencies</a></li>
                                    <li className='ms-md-3'> <a href="/">Exchanges</a></li>
                                    <li className='ms-md-3'> <a href="/">NFT</a></li>
                                    <li className='ms-md-3'> <a href="/">Cryptown</a></li>
                                    <li className='ms-md-3'> <a href="/">Portfolio</a></li>
                                    <li className='ms-md-3'> <a href="/">Watchlist</a></li>
                                </ul>
                            </div>

                            <div className={`col-md-2 ${style.yellowBorder}`} style={{ padding: '0 0' }}>
                            
                            </div>

                            <div className={`col-md-3 ${style.yellowBorder}`}>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
