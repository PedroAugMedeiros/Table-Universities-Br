import { useState, useCallback } from 'react';
import { ApiService } from '../services';
import { ApiInterface } from '../interfaces';

export const useApiInterface = () => {
 const [universitiesList, setUniversitiesList] = useState<ApiInterface[]>([]);

  const getAll = useCallback(async () => {
    
    const { status, data } = await ApiService.getAll();

    if (status !== 200 || data === universitiesList) throw new Error();
    setUniversitiesList(data)
  }, []);
  console.log(universitiesList)
  return {
    universitiesList,
    getAll,
  };
 
};