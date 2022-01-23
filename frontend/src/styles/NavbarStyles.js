import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.div`
    display: flex;
    height: 55px;
    align-items: center;
    width: 100%;
    background-color: black;
    justify-content: center;
`

export const NavbarInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

export const NavLinksContainer = styled.div`
    display: flex;
`

export const Title = styled(Link)`
    text-decoration: none;
    color: #BEC0C0;
`

export const NavLink = styled(Link)`
    margin-left: 30px;
    text-decoration: none;
    color: #7A7B7C;
`