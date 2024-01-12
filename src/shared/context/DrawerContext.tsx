import React, { createContext, useState, useCallback, useContext } from 'react'


interface IDrawerContextData {
    isDrawerOpen: boolean
    drawerOptions: IDrawerOption[]
    toggleDrawerOpen: () => void
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

interface IDrawerOption {
    icon: string
    label: string
    path: string
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldIsDrawerOpen => !oldIsDrawerOpen)
    }, [])

    const handleSetDrawerOption = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOption }}>
            {children} 
        </DrawerContext.Provider>
    )
}