import * as C from './styles';
import { useEffect, useState } from 'react';
import { useApiInterface } from '../../hooks/useApiInterface';
export const ListOrdened = () => {

  const { universitiesList, getAll} = useApiInterface()

  const getListOrdened = () => {
    return universitiesList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => (
      <tr key={index}>
        <C.TableTd>{item.id}</C.TableTd>
        <C.TableTd>{item.name}</C.TableTd>
        <C.TableTd>{item.initial}</C.TableTd>
        <C.TableTd>{item.region}</C.TableTd>
        <C.TableTd>{item.regionType}</C.TableTd>
        <C.TableTd>{item.state}</C.TableTd>
        <C.TableTd>{item.type}</C.TableTd>
        <C.TableTd>{item.createdAt}</C.TableTd>
        <C.TableTd>{item.updatedAt}</C.TableTd>
      </tr>
    ))
  }

  useEffect(() => {
    getAll();
  }, [getAll]);

return (
  <tbody> 
  {getListOrdened()}
  </tbody>
);
}

export default ListOrdened;