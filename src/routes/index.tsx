import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/inicio" element={<p>Pagina Inicial</p>}/>
            
            <Route path="*" element={<Navigate to="/inicio"/>}/>
        </Routes>
    )
}