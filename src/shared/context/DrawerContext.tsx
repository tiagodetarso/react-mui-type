import React, { createContext, useState, useCallback, useContext } from 'react'


interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldIsDrawerOpen => !oldIsDrawerOpen)
    }, [])

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children} 
        </DrawerContext.Provider>
    )
}