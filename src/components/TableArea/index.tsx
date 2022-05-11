import * as C from './styles';
import { ListOrdened } from '../Lists/ListOrdened'

export const TableArea = () => {

    return (
        <C.Table> 
            <thead>
                <tr>   
                </tr>
                <tr>
                    <C.TableHeadColumn>ID</C.TableHeadColumn>
                    <C.TableHeadColumn>Nome</C.TableHeadColumn>
                    <C.TableHeadColumn>Sigla</C.TableHeadColumn>
                    <C.TableHeadColumn>Região</C.TableHeadColumn>
                    <C.TableHeadColumn>Localização</C.TableHeadColumn>
                    <C.TableHeadColumn>Estado</C.TableHeadColumn>
                    <C.TableHeadColumn>Tipo</C.TableHeadColumn>
                    <C.TableHeadColumn>Data Criação</C.TableHeadColumn>
                    <C.TableHeadColumn>Data Atualização</C.TableHeadColumn>
                </tr>
            </thead>
            <ListOrdened />
        </C.Table>
    );
}
