import { useSearchParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'

import { FerramentasDaListagem } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { pessoasServices } from '../../shared/services/api/pessoas/PessoasServices'


export const ListagemDePessoa: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const busca = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    useEffect(() => {
        pessoasServices.getAll(1, busca)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    console.log(result)
                }
            })
    },[busca])


    return (
        <LayoutBaseDePagina
            titulo='Listagem de Pessoas'
            barraDeFerramentas = {
                <FerramentasDaListagem 
                    textoBotaoNovo='Nova'
                    mostrarInputBusca
                    textoDaBusca={busca}
                    aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true} )}
                />
            }
        >
            Lista de Pessoas
        </LayoutBaseDePagina>
    )
}