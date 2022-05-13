import { createContext, useState } from "react";
import { UniversitiesContextType, UniversitiesContextProps } from '../types';

const initialValue = {
  typeFilter: 'FirstList',
  showInput: false, 
  valueInput: '',
  setShowInput: () => {},
  setTypeFilter: () => {},
  setValueInput: () => {},
};

export const UniversitiesContext = createContext<UniversitiesContextType>(initialValue);

export const UniversitiesContextProvider = ({ children } : UniversitiesContextProps) => {
  const [typeFilter, setTypeFilter] = useState(initialValue.typeFilter);
  const [ showInput, setShowInput ] = useState(initialValue.showInput)
  const [ valueInput, setValueInput ] = useState(initialValue.valueInput)

  return (
    <UniversitiesContext.Provider value={{ typeFilter, valueInput, showInput, setTypeFilter, setShowInput, setValueInput }}>{ children }</UniversitiesContext.Provider>
  )
};