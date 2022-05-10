import * as C from './styles';
import { ListOrdened } from '../Lists/ListOrdened'
export const TableArea = () => {

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={50}>ID</C.TableHeadColumn>
                    <C.TableHeadColumn width={700}>name</C.TableHeadColumn>
                    <C.TableHeadColumn width={10}>initial</C.TableHeadColumn>
                    <C.TableHeadColumn width={500}>region</C.TableHeadColumn>
                    <C.TableHeadColumn width={500}>regionType</C.TableHeadColumn>
                    <C.TableHeadColumn width={500}>state</C.TableHeadColumn>
                    <C.TableHeadColumn width={500}>type</C.TableHeadColumn>
                    <C.TableHeadColumn width={500}>createdAt</C.TableHeadColumn>
                    <C.TableHeadColumn width={500}>updateAt</C.TableHeadColumn>
                </tr>
            </thead>
            <ListOrdened />
        </C.Table>
    );
}
