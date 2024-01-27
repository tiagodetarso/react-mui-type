import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, LinearProgress, Pagination } from '@mui/material'

import { useDebounce } from '../../shared/hooks'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { FerramentasDaListagem } from '../../shared/components'
import { IListagemPessoa, pessoasServices } from '../../shared/services/api/pessoas/PessoasServices'
import { Environment } from '../../shared/environment'


export const ListagemDePessoa: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { debounce } = useDebounce(2000)

    const [rows, setRows] = useState<IListagemPessoa[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const busca = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    const pagina = useMemo(() => {
        return Number(searchParams.get('pagina') || '1')
    }, [searchParams])

    useEffect(() => {
        setIsLoading(true)

        debounce(() => {
            pessoasServices.getAll(pagina, busca)
                .then((result) => {
                    setIsLoading(false)

                    if (result instanceof Error) {
                        alert(result.message)
                    } else {
                        console.log(result)

                        setRows(result.data)
                        setTotalCount(result.totalCount)
                    }
                })
        })
    },[busca, pagina])

    return (
        <LayoutBaseDePagina
            titulo='Listagem de Pessoas'
            barraDeFerramentas = {
                <FerramentasDaListagem 
                    textoBotaoNovo='Nova'
                    mostrarInputBusca
                    textoDaBusca={busca}
                    aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto, pagina: '1' }, { replace: true} )}
                />
            }
        >
            <TableContainer component={Paper} variant='outlined' sx={{ m:1, width:'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>E-mail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>Ações</TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                    { totalCount === 0 && !isLoading && (
                        <caption>{Environment.LISTAGEM_VAZIA}</caption>
                    )}

                    <TableFooter>
                        { isLoading && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <LinearProgress variant='indeterminate'/>
                                </TableCell>
                            </TableRow>
                        )}

                        { (totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <Pagination
                                        page={pagina}
                                        count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                                        onChange={ (_, newPage) => setSearchParams({ busca, pagina: newPage.toString() }, { replace: true }) }
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </LayoutBaseDePagina>
    )
}