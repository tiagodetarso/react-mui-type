import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material'
import Icon from '@mui/material/Icon'
import { useAppThemeContext, useDrawerContext } from '../../context'
import { useNavigate, useResolvedPath, useMatch } from 'react-router-dom'


interface IlistItemLinkProps {
    to: string
    label: string
    icon: string
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IlistItemLinkProps> = ({ to, icon, label, onClick }) => {

    const navigate = useNavigate()

    const resolvedPath = useResolvedPath(to)
    const match = useMatch({ path: resolvedPath.pathname, end: false})

    const handleClick = () => {
        navigate(to)
        onClick?.()
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()
    const { toggleTheme } = useAppThemeContext()

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://media.licdn.com/dms/image/C4D03AQGgWdsGcJcMxQ/profile-displayphoto-shrink_800_800/0/1643343127060?e=2147483647&v=beta&t=sSXG7bOnpisb1jMsuXsREi1kcaF49kBTUKJcIekVN88"/>
                    </Box>

                    <Divider />

                    <Box flex="1">
                        <List component="nav">
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    to={drawerOption.path}
                                    label={drawerOption.label}
                                    icon={drawerOption.icon} 
                                    onClick={smDown ? toggleDrawerOpen : undefined} 
                                />
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <List component="nav">
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>dark_mode</Icon>
                                </ListItemIcon>
                                <ListItemText primary='ALTERNAR TEMA' />
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}