import React from 'react';
import { useState, useCallback, useEffect, useContext } from 'react';
import Web3Context from '../context/web3Context';
import data from './file.json';
import ChevronDown from "../assets/svg/chevronDown"
import Info from "../assets/svg/info"
import style from '../css/cmcTable.module.css'
// import Image from 'next/image'
import More from '../assets/svg/more'
import Star from '../assets/svg/star'
import ChevronUp from "../assets/svg/chevronUp"
import { useNavigate } from "react-router-dom";
// import getData from '../api/TopTenCoins';



const Rate = (props) => {
    let green = {
        color: '#17C784'
    };

    let red = {
        color: '#EA3943'
    }
    return <div style={{ display: 'inline' }}>
        <p style={props.isIncrement ? green : red}>
            {props.isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}&nbsp;&nbsp;{props.rate}
        </p>
    </div>
}

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

function Coin_Name_Row(props) {
    return (
        <>
            <p onClick={props.clicked} style={{ cursor: 'pointer' }}>
                <img src={coinIcons[props.icon]} alt="" width={20} height={20} />
                &nbsp;{props.name}
            </p>
        </>
    )
}

function CMC_Row(props) {
    const navigate = useNavigate();
    const graphImages = [
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
    ]

    const getRandomGraph = () => {
        const rndInt = Math.floor(Math.random() * 10) + 1
        return graphImages[rndInt]
    }

    const formatNum = num => {
        return Number(num.toFixed(2)).toLocaleString()
    }

    const navigate_coinInfo = () => {
        console.log('iam clicked');
        navigate('/currencies/info', { state: {symbol:`${props.coinSymbol}`, name: props.coinName, price:formatNum(props.price) } });
    }
    return (
        <>
            <tr>
                <td className={`ps-md-3`}><Star /></td>
                <td className={`ps-md-3`}>{props.starNum}</td>
                <td className={`ps-md-3`}>
                    {props.coinIcon ? (
                        <Coin_Name_Row name={props.coinName} icon={props.coinSymbol} clicked={navigate_coinInfo} />
                    ) : <></>}
                </td>

                <td className={`ps-md-3`}>${formatNum(props.price)}</td>

                <td className={`ps-md-3`}>
                    <Rate isIncrement={props.hRateIsIncrement} rate={`${formatNum(props.hRate)}%`} />
                </td>
                <td className={`ps-md-3`}>
                    <Rate isIncrement={props.dRateIsIncrement} rate={`${formatNum(props.dRate)}%`} />
                </td>

                <td className={`ps-md-3`}>
                    ${formatNum(props.marketCapValue)}
                </td>

                <td className={`ps-md-3`}>
                    <p>{formatNum(props.volumeValue)}
                        <br />
                        <span style={{ color: 'grey' }}> {formatNum(props.volumeCryptoValue)} ({props.coinSymbol})</span>
                    </p>
                </td>

                <td className={`ps-md-3`}>
                    {formatNum(props.circulatingSupply)}
                </td>

                <td className={`ps-md-3`}>
                    <img src={getRandomGraph()} width={150} height={60} alt='' />
                </td>

                <td className={`ps-md-3`}><More /></td>
            </tr>
        </>
    )
}


export default function CMC_Table() {
    const context = useContext(Web3Context);
    const [coinsData, setCoinsData] = useState(null);

    useEffect(() => {
        //setData();

        let arr = data.data;
        setCoinsData(arr);
    }, [])

    let setData = useCallback(
        async () => {
            try {
                let arr = [];
                //let getData = context.getTopTenCoins();
                let getData = async () => { };
                getData().then((records) => {
                    // let data = records.data;
                    let data = [];
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].cmc_rank <= 10) {
                            arr.push(data[i]);
                        }
                    }
                    if (arr.length > 0) {
                        setCoinsData(arr);
                        //

                    }
                }).catch((error) => {
                    console.log(error);
                });
            } catch (error) {
                console.log(error);
            }
        },
        [context]
    )



    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12" style={{ border: '2px solid yellow', padding: '0' }}>
                        {/* style={{width:'100%'}} */}
                        <table >
                            <thead >
                                <tr>
                                    <th className={`ps-md-3`}></th>
                                    <th className={`ps-md-3`}><b># &nbsp;</b><ChevronDown fill={'black'} /></th>
                                    <th className={`ps-md-3`}>Name</th>
                                    <th className={`ps-md-3`}>Price</th>
                                    <th className={`ps-md-3`}>24h %</th>
                                    <th className={`ps-md-3`}>7d %</th>
                                    <th className={`ps-md-3`}>Market Cap <Info /></th>
                                    <th className={`ps-md-3`}>Volume(24h) <Info /></th>
                                    <th className={`ps-md-3`}>Circulating Supply <Info /></th>
                                    <th className={`ps-md-3`}>Last 7 days</th>
                                    <th className={`ps-md-3`}></th>
                                </tr>
                            </thead>

                            <tbody>

                                {coinsData ? coinsData.map((data, index) => {
                                    ///console.log(data);
                                    return (
                                        <CMC_Row
                                            key={index}
                                            starNum={data.cmc_rank}
                                            coinName={data.name}
                                            coinSymbol={data.symbol}
                                            coinIcon={'btc'} //
                                            showBuy={data}
                                            hRate={data.quote.USD.percent_change_24h}
                                            dRate={data.quote.USD.percent_change_7d}
                                            hRateIsIncrement={true}
                                            price={data.quote.USD.price}
                                            marketCapValue={data.quote.USD.market_cap}
                                            volumeCryptoValue={data.quote.USD.volume_24h}
                                            volumeValue={data.total_supply}
                                            circulatingSupply={data.circulating_supply}
                                        />
                                    )

                                }) : <></>}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
