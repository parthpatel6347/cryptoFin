import axios from 'axios';
import React, { useEffect, useState, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import { CoinContainer, CoinMain, CoinMainInner, GridITem, Main, TableTitles, CoinImage, Symbol, ChangeNeg, ChangePos } from '../styles/DashboardStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { formatUSD, formatUSDWhole } from '../utils';


function Dashboard(props) {
    const [coinList, setCoinList] = useState([])
    const [loadingCoins, setLoadingCoins] = useState(true)
    const {loadUser, error, isAuthenticated, loading, user} = useContext(authContext)

    useEffect(() => {
       loadUser();
       
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d')
        .then(res => {
            setCoinList(res.data)
            setLoadingCoins(false)
        })
    },[])

    return (
        <Main>
      {loading === false && loadingCoins === false && (
        <Fragment>
        <TableTitles>
          <span>Rank</span>
          <GridITem>Name</GridITem>
          <GridITem>Price</GridITem>
          <GridITem>24h %</GridITem>
          <GridITem>7d %</GridITem>
          <GridITem>Market Cap</GridITem>
        </TableTitles>
          {coinList.map(coin => (
            <CoinContainer to={`/coins/${coin.id}`} key={coin.id}>
            <span>{coin.market_cap_rank}</span>
              <CoinMain>
                <CoinImage src={coin.image}/>
                <CoinMainInner>
                  <span>{coin.name}</span>
                  <Symbol>{coin.symbol}</Symbol>
                </CoinMainInner>
              </CoinMain> 
               <GridITem>{formatUSD.format(coin.current_price)}</GridITem>
               <GridITem>
               {coin.price_change_percentage_24h < 0 ? (
                <ChangeNeg><FontAwesomeIcon icon={faAngleDown} style={{marginRight:"3px"}}/>{(Math.abs(coin.price_change_percentage_24h)).toFixed(2)}%</ChangeNeg>
               ) : (
                <ChangePos><FontAwesomeIcon icon={faAngleUp} style={{marginRight:"3px"}}/>{(coin.price_change_percentage_24h).toFixed(2)}%</ChangePos> 
               )}
               </GridITem>
               <GridITem>
               {coin.price_change_percentage_7d_in_currency < 0 ? (
                <ChangeNeg><FontAwesomeIcon icon={faAngleDown} style={{marginRight:"3px"}}/>{(Math.abs(coin.price_change_percentage_7d_in_currency)).toFixed(2)}%</ChangeNeg>
               ) : (
                <ChangePos><FontAwesomeIcon icon={faAngleUp} style={{marginRight:"3px"}} />{(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</ChangePos> 
               )}
               </GridITem>
               <GridITem>{formatUSDWhole.format(coin.market_cap)}</GridITem>
            </CoinContainer>
          ))}
        </Fragment>
      )}
    </Main>
    );
}

export default Dashboard;