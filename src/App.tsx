import { BrowserRouter } from 'react-router-dom'

import { AppThemeProvider } from './shared/context'
import { AppRoutes } from './routes'

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AppThemeProvider>
);
}