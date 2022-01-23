import styled from "styled-components";

export const Main = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    max-width: 800px;
    flex-direction: column;
    align-items: center;
`

export const ValuationContainer = styled.div`
    border:1px solid gray;
    display: flex;
    border-radius: 15px;
    padding:20px;
    width: 100%;
    justify-content: space-between;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InfoHeader = styled.div`
    color: gray;
    font-size: 15px;
    font-weight: 500;
`
export const InfoContent = styled.div`
    color:white;
    font-size: 18px;
    font-weight: 500;
`


export const HeaderTitle = styled.div`
    font-size: 26px;
    color: white;
    margin-top: 30px;
    margin-bottom:15px;
`
export const ChartContainer = styled.div`
    max-width: 500px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 40px;
`
export const CoinContainer = styled.div`
    color:white;
    border:1px solid gray;
    display: grid;
    width: 100%;
    border-radius:15px;
    box-sizing: border-box;
    padding: 15px 25px;
    margin-bottom: 15px;
    grid-template-columns:repeat(4, 1fr);
    max-width: 600px;
`
export const WalletCoinTitle=styled.div`
    align-items: center;
    display: flex;
    grid-column: span 2;
`

export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: end;
`

export const CoinBalance = styled.div`
    font-size:15px;
    font-weight: 500;
`

export const UsdBalance = styled.div`
    font-size: 15px;
    font-weight: 400;
`

export const PLContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: end;
`

export const PLUsd = styled.div`
    font-size:15px;
    font-weight: 500;
`

export const PLPctg = styled.div`
    font-size: 15px;
    font-weight: 400;
`