import React from 'react'
import { useLocation } from "react-router-dom";
import style from '../css/coinInfo.module.css';
import Graph from './Graph';
import converter from '../assets/converter.png';
import USD from '../assets/svg/usd';
import shiba from '../assets/shiba.png';
import ChevronDown from '../assets/svg/chevronDown';
import ChevronUp from '../assets/svg/chevronUp';



export default function CoinInfo() {
    const { state } = useLocation();
    const { symbol, name, price } = state;
    console.log(`reached ${symbol} ${name}`)

    var coinIcons = {
        'BTC': require('../assets/btc.png'),
        'BNB': require('../assets/bnb.png'),
        'ETH': require('../assets/eth.png'),
        'XRP': require('../assets/xrp.png'),
        'USDT': require('../assets/usdt.png'),
        'USDC': require('../assets/usdc.png'),
        'TERA': require('../assets/tera.png'),
        'SOLANA': require('../assets/solana.png'),
        'SHIBA': require('../assets/shiba.png'),
        'CARDANO': require('../assets/cardano.png')

    }

    return (
        <>
            <div className={`container-fluid mt-5`}>
                {/* chat and graph row */}
                <div className={`row justify-content-evenly`}>
                    {/* graph */}
                    <div className={`col-md-8 ${style.redBorder}`}>
                        {/* options */}
                        <div className={`row ${style.blueBorder} justify-content-between`}>
                            <div className={`col-md-5 p-0 ${style.yellowBorder}`}>
                                {/*  */}
                                <ul style={{ background: '#323546' }} className={`shadow ${style.blueBorder} px-2`}>
                                    <li className={`px-2 py-2`}><a href="" style={{ fontSize: '15px' }}>Price</a></li>
                                    <li className={`px-2 py-2`}><a href="" style={{ fontSize: '15px' }}>Market Cap</a></li>
                                    <li className={`px-2 py-2`}><a href="" style={{ fontSize: '15px' }}>Trading View</a></li>
                                    <li className={`px-2 py-2`}><a href="" style={{ fontSize: '15px' }}>History</a></li>
                                </ul>
                            </div>

                            <div className={`col-md-6 p-0 ${style.yellowBorder}`}>
                                <ul style={{ background: '#323546' }} className={`shadow ${style.blueBorder} mx-auto`}>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>1D</a></li>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>3D</a></li>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>1M</a></li>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>3M</a></li>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>1YT</a></li>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>ALL</a></li>
                                    <li className={`px-3 py-2`}><a href="" style={{ fontSize: '15px' }}>LOG</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Graph */}
                        <div className={`row mt-md-4 ${style.blueBorder}`}>
                            <div className={`col-12 ${style.blueBorder}`}>
                                <Graph />
                            </div>
                        </div>

                        {/* checkboxes */}
                        <div className={`row ps-md-3 mt-md-3 ${style.blueBorder} justify-content-between`}>
                            <div className={`col-3 ${style.blueBorder}`}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">USD</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">BTC</label>
                                </div>
                            </div>
                            <div className={`col-4 ${style.blueBorder}`}>
                                <p>Want more data? <span style={{ color: '#174DBD' }}>Check out out API</span></p>
                            </div>
                        </div>
                    </div>

                    {/* chat */}
                    <div className={`col-md-3 ${style.redBorder}`}>
                        <div className={`row ${style.blueBorder} justify-content-between`}>
                            <div className={`col-md-5 ${style.yellowBorder}`}>
                                <p><b>Live Chat</b></p>
                            </div>

                            <div className={`col-md-4 ${style.yellowBorder}`}>
                                <p><b><a style={{ color: '#6188FF', fontSize: '15px' }} href="">See more</a></b></p>
                            </div>
                        </div>

                        <div className={`row mt-md-3 p-md-3  align-items-center ${style.blueBorder}`} style={{ background: '#222531', borderRadius: '11px' }}>
                            <div className={`col-md-5 p-0 ${style.yellowBorder}`}>
                                <img style={{ float: 'left' }} src={shiba} alt="" height={'64'} width={'64'} />
                                <p style={{ float: 'left', marginTop: '9px' }}>Drak
                                    <br /><small style={{ color: '#c0c0c0' }}>@drakosi</small>
                                </p>
                            </div>

                            <div className={`col-md-3 ms-auto p-0 ${style.yellowBorder}`}>
                                <button className={` btn p-1  ${style.bullishBtn}`}>Bullish</button>
                            </div>

                            <div className={`col-md-3 ms-auto p-0 ${style.yellowBorder}`}>
                                <button className={`btn p-1 ${style.bearishBtn}`}>Bearish</button>
                            </div>
                        </div>

                        <div className={`row ${style.blueBorder} justify-content-end`}>
                            <div className={`col-12 mt-2 ${style.yellowBorder}`}>
                                <small>
                                <ChevronUp fill={'#00a300'}/> <span style={{color:'#00a300'}}>Bullish</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ChevronDown fill={'#ff0000'}/> <span style={{color:'#ff0000'}}>Bearish</span>
                                </small>
                            </div>
                            
                            <div className={`col-12 mt-2 p-0 ${style.yellowBorder}`}>
                                <input className={`py-3 px-3 ${style.msg}`} type="text" placeholder={`Whats happening on ${symbol}`}/>
                            </div>

                            <div className={`col-md-4 mt-2 ${style.yellowBorder}`}>
                                <button className='btn btn-primary' style={{width:'90%'}}>Send</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* price convert row */}
                <div className={`ms-4 row mt-4`}>
                    <div className={`my-4 col-12`}>
                        <h5 style={{ color: 'white' }}>{symbol} to USD Converter</h5>
                    </div>

                    <div className={`col-md-8`}>
                        <div className={`row shadow py-4 justify-content-around align-items-center`} style={{ background: '#171924', borderRadius: '11px' }}>
                            <div className={`col-md-3 ${style.blueBorder}`}>
                                <img src={coinIcons[symbol]} alt="" width={`50`} height={`50`} style={{ float: 'left' }} className={`m-0`} />
                                <p className={`m-0 ms-2`} style={{ float: 'left', marginTop: '5px' }}>
                                    <span style={{ color: 'grey', fontSize: '13px' }}>{symbol}</span>
                                    <br />
                                    {name}
                                </p>
                            </div>

                            <div className={`col-md-4 ${style.blueBorder}`}>
                                <img src={converter} alt="" width={`50`} height={`50`} style={{ float: 'left' }} className='m-0 me-2' />

                                <USD />

                                <p className={`m-0 ms-2`} style={{ float: 'left', marginTop: '4px' }}>
                                    <span style={{ color: 'grey', fontSize: '13px' }}>USD</span>
                                    <br />
                                    United States Dollar
                                </p>

                            </div>

                            <div className={`col-md-3 p-0 ${style.blueBorder}`}>
                                <p className={`${style.redBorder} m-0`} style={{ fontSize: '30px' }}>$ {price}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`col-12 mt-3 mb-5`}>
                        <button className='btn px-4 py-2 btn-primary'> Convert </button>
                    </div>

                </div>
            </div>
        </>
    )
}
