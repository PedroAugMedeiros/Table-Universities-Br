import { ReactNode } from "react";

export type UniversitiesContextProps = { 
  children: ReactNode;
}

export type UniversitiesContextType = {
  typeFilter: string;
  showInput: boolean;
  valueInput: string;
  setValueInput: (newState: string) => void;
  setShowInput: (newState: boolean) => void;
  setTypeFilter: (newState: string ) => void;
}

export type filtersArray = {
  FullList: string;
  FirstList: string;
  FiltredById: string;
  FiltredByName: string;
  FiltredByInitial: string;
  FiltredByRegion: string;
  FiltredByTypeRegion: string;
  FiltredByState: string;
  FiltredByType: string;
  FiltredByCreatedAt: string;
  FiltredByUpdatedAt: string;
}
