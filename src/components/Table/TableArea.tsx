import { useEffect } from 'react';
import * as C from './styles';
import { useApiInterface } from '../../hooks/useApiInterface';

export const TableArea = () => {
  const { universitiesList, getAll} = useApiInterface()

  useEffect(() => {
    getAll();
  }, [getAll]);
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
            <tbody> 
            { universitiesList.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.initial}</td>
                  <td>{item.region}</td>
                  <td>{item.regionType}</td>
                  <td>{item.state}</td>
                  <td>{item.type}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                </tr>
              ))}
            </tbody>
        </C.Table>
    );
}
