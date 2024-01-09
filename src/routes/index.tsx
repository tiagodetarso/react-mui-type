import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { useDrawerContext } from '../shared/context'

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext()

    return(
        <Routes>
            <Route path="/inicio" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Abrir Menu</Button>}/>
            
            <Route path="*" element={<Navigate to="/inicio"/>}/>
        </Routes>
    )
}