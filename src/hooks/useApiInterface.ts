import { useState, useCallback } from 'react';
import { ApiInterface } from '../interfaces';
import { ApiService } from '../services';

export const useApiInterface = () => {
  
 const [universitiesList, setUniversitiesList] = useState<ApiInterface[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await ApiService.getAll();
    if (status !== 200 || data === universitiesList) throw new Error();
    setUniversitiesList(data);
  }, [universitiesList]);

  return {
    universitiesList,
    getAll,
  };
};