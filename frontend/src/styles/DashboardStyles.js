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
    background-color: ${(props) => props.theme.colors.bgLight};
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    border: 1px solid rgba(128, 128, 128, 0.1);
    margin:0px 0;
    text-decoration: none;
    color: white;
    align-items:center;
    justify-items: center;
    box-sizing: border-box;
    padding: 14px 10px;
    &:last-child {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    &:hover{
        color:white;
        background-color:${(props) => props.theme.colors.bgHover};

    }
    `

export const TableTitles = styled.div`
    width: 80%;
    background-color:black;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    border: 1px solid rgba(128, 128, 128, 0.25);
    /* margin:15px 0; */
    padding: 14px 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    color: #8D8D8D;
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
    font-size: 13px;
`
export const ChangePos = styled.span`
    color:${(props) => props.theme.colors.green};
`

export const ChangeNeg = styled.span`
    color:${(props) => props.theme.colors.red};
`