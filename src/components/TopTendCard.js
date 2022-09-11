import React from 'react';
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import style from '../css/topTrendCard.module.css';
import ChevronUp from '../assets/svg/chevronUp';
import data from './file.json';

function Card() {
  // getting data from api
  return (
    <>
      <div className={`col-md-3 p-0 m-0 ${style.yellowBorder}`}>
        <div className={`row p-0 m-0 justify-content-between`}>
            <div className={`col-md-4 p-0 m-0 ${style.redBorder}`}>

            </div>
            <div className={`col-md-2 p-0 m-0 ${style.redBorder}`}>
                  <a style={{color:'blue'}} href=""><u>More</u></a>
            </div>
        </div>
      </div>
    </>
  )

}
export default function TopTendCard() {
  return (
    <>
      <div className={`p-0 m-0 container-fluid`}>
        <div className={`p-0 m-0 row mx-auto ${style.blueBorder}`} style={{ width: '95%' }}>
          <div className={`col-12`}>
            <h3 style={{ color: 'white' }}>Todays Cryptocurrency Prices by Market Cap
            </h3>
            <p style={{}}> <span style={{ color: '#d6d4d4' }}>The global crypto market cap is $1.74T, a</span> &nbsp;
              <span style={{ color: 'green' }}> <ChevronUp fill={'green'} /> 0.53% </span>
              &nbsp; decrease over the last day. <u style={{ color: 'blue', cursor: 'pointer' }}>Read More</u> </p>
          </div>
        </div>

        <div className={`p-0 mt-md-3 row mx-auto justify-content-around ${style.blueBorder}`} style={{ width: '100%' }}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}
