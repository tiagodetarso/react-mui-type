import { Routes, Route, Navigate } from 'react-router-dom'

import { useDrawerContext } from '../shared/context'
import { useEffect } from 'react'
import { Dashboard } from '../pages'

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página Inicial',
                icon: 'home',
                path: '/inicio'
            },
        ])
    },[])

    return(
        <Routes>
            <Route path="/inicio" element={<Dashboard />}/>
            
            <Route path="*" element={<Navigate to="/inicio"/>}/>
        </Routes>
    )
}