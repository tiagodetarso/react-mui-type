import { Box, Button, TextField, Paper, useTheme, Icon } from '@mui/material'

import { Environment } from '../../environment'

interface IFerramentasDaListagemProps {
    textoDaBusca?: string
    mostrarInputBusca?: boolean
    aoMudarTextoDeBusca?: (novoText: string) => void
    textoBotaoNovo?: string
    mostrarBotaoNovo?: boolean
    aoClicarEmNovo?: () => void
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClicarEmNovo
}) => {

    const theme = useTheme()

    return (
        <Box
            component={Paper}
            display='flex'
            gap={1}
            alignItems='center'
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
        >
            { mostrarInputBusca &&(
                <TextField 
                    size='small'
                    value={textoDaBusca}
                    placeholder={Environment.INPUT_DE_BUSCA}
                    onChange={ (e) => aoMudarTextoDeBusca?.(e.target.value)}
                />
            )}
            <Box 
                flex={1}
                display='flex'
                justifyContent='end'
            >
                { mostrarBotaoNovo && (
                    <Button
                        variant='contained'
                        disableElevation
                        endIcon={<Icon>add</Icon>}
                        onClick={aoClicarEmNovo}
                        color='primary'
                    >
                        {textoBotaoNovo}
                    </Button> 
                )} 
            </Box>
        </Box>
    )
}