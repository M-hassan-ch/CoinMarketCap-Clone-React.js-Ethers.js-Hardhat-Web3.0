import './App.css';
import Navbar from './components/Navbar';
import CMC_Table from './components/CMC_Table';
import CoinInfo from './components/CoinInfo';
import { useMoralis } from "react-moralis";
import React, { useEffect } from 'react';
import { Web3State } from './context/Web3State';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>


      {/* <Web3State>

        <Navbar />
        <CMC_Table />

      </Web3State> */}

      <BrowserRouter>
        <Web3State>
          <Navbar />
          <Routes>
            <Route path="/" element={<React.Fragment>

              <CMC_Table />
            </React.Fragment>}>
            </Route>

            <Route path="/currencies/info" element={<React.Fragment>
              <CoinInfo />
            </React.Fragment>}>
            </Route>
          </Routes>
        </Web3State>
      </BrowserRouter>

    </>
  );
}

export default App;
