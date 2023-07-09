import * as React from 'react';
import { Box} from '@mui/material';
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import Menu from './Menu'

import logoDG from './img/logoDG.svg';
import "./styles.scss";
import Buttons from './Buttons';


export default function Header() {
    return (
        
        <div >
        <Box className="header-pai-topbar" >
            <Box className="header-topbar">
                <Box to="/" sx={{ cursor: 'pointer'}}>
                    <img src={logoDG} alt="logoDG" />
                </Box>
                <SearchBar />
                <Buttons />
                <ShoppingCart />
            </Box>
            <Box>
                <Menu />
            </Box>
        </Box>
        </div>
    )
}
