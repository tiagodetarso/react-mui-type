import { BrowserRouter } from 'react-router-dom'

import { AppThemeProvider, DrawerProvider } from './shared/context'
import { AppRoutes } from './routes'
import { MenuLateral } from './pages'

export const App = () => {
    return (
        <AppThemeProvider>
            <DrawerProvider>

                <BrowserRouter>

                    <MenuLateral>
                        <AppRoutes/>
                    </MenuLateral>

                </BrowserRouter>
                
            </DrawerProvider>
        </AppThemeProvider>
    )
}