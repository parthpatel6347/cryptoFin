import styled from "styled-components";
import { Link } from "react-router-dom";


export const Main = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const CoinContainer = styled(Link)`
    width: 80%;
    background-color: #181D1F;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    border: 1px solid black;
    margin:15px 0;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    align-items:center;
    justify-items: center;
    box-sizing: border-box;
    padding: 10px;
`

export const TableTitles = styled.div`
    width: 80%;
    background-color: #181D1F;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    border: 1px solid black;
    margin:15px 0;
    border-radius: 15px;
    color: white;
    align-items:center;
    justify-items: center;
`

export const CoinMain = styled.div`
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-self: start;
`
export const CoinMainInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const GridITem = styled.div`
    grid-column: span 2;
`

export const CoinImage = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 15px;
    margin-left: 20px;
    margin-right: 10px;
`

export const Symbol = styled.span`
    color: #BEC0C0;
    font-size: 15px;
`
export const ChangePos = styled.span`
    color:green;
`

export const ChangeNeg = styled.span`
    color:red;
`