import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react';
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


import authContext from '../context/auth/authContext';
import { BalanceContainer, ChartContainer, ChartInner, CoinBalance, CoinContainer, ContentContainer, HeaderTitle, InfoContainer, InfoContent, InfoGreen, InfoHeader, InfoRed, Main, PLContainer, PLPctg, PLPctgGreen, PLPctgRed, PLUsd, PLUsdGreen, PLUsdRed, UsdBalance, ValuationContainer, WalletCoinTitle } from '../styles/PortfolioStyles';
import { formatUSD } from '../utils';
import { WalletCoinImg, WalletCoinSymbol } from '../styles/CoinStyles';


function Portfolio(props) {
    const [coinList, setCoinList] = useState([])
    const [loadingCoinData, setLoadingCoinData] = useState(true);

    const {loadUser, error, isAuthenticated, loading, user, walletLoading, wallet, getWallet} = useContext(authContext);
    
    useEffect(() => {
       loadUser()

        // Get coins data
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
        .then(res => {
            setCoinList(res.data)
            setLoadingCoinData(false)
        })

    },[])

    useEffect(()=>{
        if (isAuthenticated){
            getWallet(user.id)
        }
    },[user])

    const currentValuation = () => {
        if (loading === false && loadingCoinData === false){
            let currentHolding = wallet.reduce((sum, current) => {
                let curCoin = coinList.filter(coin => coin.id === current.symbol)[0]
                return sum + (curCoin.current_price * current.holding_qty)
            },user.cash)

            return currentHolding
        }      
    }

   

    const investmentAmount = () => {
        if (loading === false && loadingCoinData === false){
            let initial = wallet.reduce((sum, current) => {
                return sum + (current.avg_cost * current.holding_qty)
            },user.cash)

            return initial
        }      
    }

    const percentPL = () => {
        return (currentValuation() / investmentAmount() * 100)-100
    }

    const genChartData = () => {
        let chartData = {
            labels:["Cash"],
            datasets:[
                {
                    label:"USD",
                    data:[user.cash],
                    backgroundColor:['rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)'],
                    borderWidth:1,
                    hoverOffset: 2,
                }
            ]
        }

        if (loading === false && loadingCoinData === false && walletLoading === false){
            
            wallet.forEach(current => {
                let curCoin = coinList.filter(coin => coin.id === current.symbol)[0]
                chartData.labels.push(curCoin.name)
                chartData.datasets[0].data.push(current.holding_qty * curCoin.current_price)
                console.log(chartData)               
            });
        }
        return chartData
    }
  
    return (<Main>
        {loading === false && loadingCoinData === false && walletLoading === false &&(
        <ContentContainer>
        <HeaderTitle>Profit & Loss Summary</HeaderTitle>
        <ValuationContainer>
            <InfoContainer>
                <InfoHeader>Initial Investment</InfoHeader>
                <InfoContent>{formatUSD.format(investmentAmount())}</InfoContent>
            </InfoContainer>
            <InfoContainer>
                <InfoHeader>Current Valuation</InfoHeader>
                <InfoContent>{formatUSD.format(currentValuation())}</InfoContent>
            </InfoContainer>
            <InfoContainer>
                <InfoHeader>Profit/Loss</InfoHeader>
                {currentValuation() - investmentAmount() < 0 ? (
                    <InfoRed>
                    {formatUSD.format(currentValuation() - investmentAmount())}
                    <span style={{marginLeft:"5px"}}>({percentPL().toFixed(2)}%)</span>
                    </InfoRed>
                ) : (
                    <InfoGreen>
                    {formatUSD.format(currentValuation() - investmentAmount())}
                    <span style={{marginLeft:"5px"}}>({percentPL().toFixed(2)}%)</span>
                    </InfoGreen>                )}
            </InfoContainer>
        </ValuationContainer>
        <HeaderTitle>Portfolio Allocation</HeaderTitle>
        <ChartContainer>
            <ChartInner>
                <Chart
                    type='doughnut'
                    data={genChartData()}
                />
            </ChartInner>
        </ChartContainer>
        <HeaderTitle>Wallet</HeaderTitle>
            {wallet.map(userCoin => (
                coinList.map(coin => coin.id === userCoin.symbol && (
                    <CoinContainer>
                    <WalletCoinTitle>
                            <WalletCoinImg src={coin.image}/>
                                <WalletCoinSymbol>{coin.name}</WalletCoinSymbol>
                        </WalletCoinTitle>
                        <BalanceContainer>
                            <InfoHeader>Balance</InfoHeader>
                            <CoinBalance>
                                {userCoin.holding_qty.toFixed(6)} {(coin.symbol).toUpperCase()}
                            </CoinBalance>
                            <UsdBalance>
                            {formatUSD.format(coin.current_price * userCoin.holding_qty)}
                            </UsdBalance>
                        </BalanceContainer>                            
                            {coin.current_price - userCoin.avg_cost < 0 ? (
                                <PLContainer>
                                <InfoHeader>Profit/Loss</InfoHeader>
                                <PLUsdRed>{formatUSD.format(userCoin.holding_qty * (coin.current_price - userCoin.avg_cost))}</PLUsdRed>
                                <PLPctgRed><FontAwesomeIcon icon={faAngleDown} style={{marginRight:"3px"}}/>{Math.abs(((coin.current_price / userCoin.avg_cost * 100) - 100).toFixed(2))}%</PLPctgRed>
                                </PLContainer>
                            ) : (
                                <PLContainer>
                                <InfoHeader>Profit/Loss</InfoHeader>
                                <PLUsdGreen>{formatUSD.format(userCoin.holding_qty * (coin.current_price - userCoin.avg_cost))}</PLUsdGreen>
                                <PLPctgGreen><FontAwesomeIcon icon={faAngleUp} style={{marginRight:"3px"}}/>{((coin.current_price / userCoin.avg_cost * 100) - 100).toFixed(2)}%</PLPctgGreen>
                                </PLContainer>
                            )}
                    </CoinContainer>
                ))
            ))}
        </ContentContainer>
        )}
        </Main>
    );
}

export default Portfolio;