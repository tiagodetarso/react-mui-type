import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { useAppThemeContext } from '../shared/context'

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext()

    return(
        <Routes>
            <Route path="/inicio" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Toggle Theme</Button>}/>
            
            <Route path="*" element={<Navigate to="/inicio"/>}/>
        </Routes>
    )
}