import { useEffect } from 'react';
import { useApiInterface } from '../../hooks/useApiInterface';

export const ListOrdened = () => {
  const { universitiesList, getAll} = useApiInterface()

  useEffect(() => {
    getAll();
  }, [getAll]);

return (
  <tbody> 
  { universitiesList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => (
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
);
}

export default ListOrdened;