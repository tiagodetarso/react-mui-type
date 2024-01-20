import { Routes, Route, Navigate } from 'react-router-dom'

import { useDrawerContext } from '../shared/context'
import { useEffect } from 'react'
import { Dashboard, ListagemDePessoa } from '../pages'

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página Inicial',
                icon: 'home',
                path: '/inicio'
            },
            {
                label: 'Pessoas',
                icon: 'people',
                path: '/pessoas'
            }
        ])
    },[])

    return(
        <Routes>
            <Route path="/inicio" element={<Dashboard />}/>

            <Route path="/pessoas" element={<ListagemDePessoa />}/>

            {/*<Route path="/cidades/detalhe/:id" element={<DetalheDeCidade />}/>*/}
            
            <Route path="*" element={<Navigate to="/inicio"/>}/>
        </Routes>
    )
}