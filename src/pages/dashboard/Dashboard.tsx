import { LayoutBaseDePagina } from '../../shared/layouts'
import { FerramentasDeDetalhe } from '../../shared/components'


export const Dashboard = () => {

    return (
        <LayoutBaseDePagina
            titulo='Página Inicial' 
            barraDeFerramentas={(
                <FerramentasDeDetalhe
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoVoltar={false}
                />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    )
}