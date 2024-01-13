import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material'


interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string

    mostrarBotaoNovo?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarEFechar?: boolean

    mostrarBotaoNovoCarregando?: boolean
    mostrarBotaoVoltarCarregando?: boolean
    mostrarBotaoApagarCarregando?: boolean
    mostrarBotaoSalvarCarregando?: boolean
    mostrarBotaoSalvarEFecharCarregando?: boolean

    aoClicarEmNovo?: () => void
    aoClicarEmVoltar?: () => void
    aoClicarEmApagar?: () => void
    aoClicarEmSalvar?: () => void
    aoClicarEmSalvarEFechar?: () => void
}


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando= false,
    mostrarBotaoVoltarCarregando= false,
    mostrarBotaoApagarCarregando= false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar
}) => {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    const theme = useTheme()

    return(
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
            { (mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&(
                <Button
                    variant='contained'
                    disableElevation
                    startIcon={<Icon>save</Icon>}
                    color='primary'
                    onClick={aoClicarEmSalvar}
                >
                    <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                        Salvar
                    </Typography>
                </Button>
            )}

            { mostrarBotaoSalvarCarregando &&(  
                <Skeleton width={110} height={60} />
            )}

            { (mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) &&(
                <Button
                    variant='outlined'
                    disableElevation
                    startIcon={<Icon>save</Icon>}
                    color='primary'
                    onClick={aoClicarEmSalvarEFechar}
                >
                    <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                        Salvar e Voltar
                    </Typography>
                </Button>
            )}

            { (mostrarBotaoSalvarEFecharCarregando && !smDown && mdDown) &&(
                <Skeleton width={180} height={60} />
            )}

            { (mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    variant='outlined'
                    disableElevation
                    startIcon={<Icon>delete</Icon>}
                    color='primary'
                    onClick={aoClicarEmApagar}
                >
                    <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                        Apagar
                    </Typography>
                </Button>
            )}

            { mostrarBotaoApagarCarregando &&(
                <Skeleton width={115} height={60} />
            )}

            { (mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) &&(
                <Button
                    variant='outlined'
                    disableElevation
                    startIcon={<Icon>add</Icon>}
                    color='primary'
                    onClick={aoClicarEmNovo}
                >
                    <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}

            { (mostrarBotaoNovoCarregando && !smDown) &&(
                <Skeleton width={100} height={60} />
            )}

            { mostrarBotaoVoltar && (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvarEFechar) && (
                <Divider
                    variant='middle' 
                    orientation='vertical'
                />
            )}

            { (mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(
                <Button
                    variant='outlined'
                    disableElevation
                    startIcon={<Icon>arrow_back</Icon>}
                    color='primary'
                    onClick={aoClicarEmVoltar}
                >
                    <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                        Voltar
                    </Typography>
                </Button>
            )}
            
            { mostrarBotaoVoltarCarregando &&(
                <Skeleton width={110} height={60} />
            )}

        </Box>
    )
}