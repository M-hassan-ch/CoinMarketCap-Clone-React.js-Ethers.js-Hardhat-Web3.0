import React from "react";
import web3Context from './web3Context';
import getTopTenCoins from '../api/TopTenCoins';

const Web3State = (props) => {

    return (
        <web3Context.Provider value={{getTopTenCoins}}>
            {props.children}
        </web3Context.Provider>
    )
}

export {Web3State};