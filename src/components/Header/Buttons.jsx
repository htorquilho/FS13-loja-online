import {Box, Button} from '@mui/material'
import React from 'react'

export default function Buttons() {
    return (
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Button variant="text" id="header-cadastre">Cadastre-se</Button>
            <Button variant="contained" id="header-entrar">Entrar</Button>
        </Box>
    )
}
