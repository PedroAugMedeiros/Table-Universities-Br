import * as C from './styles';
import { useContext } from 'react';
import { UniversitiesContext } from '../../context/UniversitiesContext'
import { filters } from '../../helpers/filters'

export const SearchArea = () => {

  const { typeFilter, showInput, valueInput, setTypeFilter, setShowInput, setValueInput } = useContext(UniversitiesContext);
  
  const handleClick = (filterNow : string) => {
    setShowInput(true)
    setValueInput('')
    setTypeFilter(filterNow)
  }

  const handleChange = (valueInput : string) => {
    setValueInput(valueInput)
  }
 
  
  return ( 
  <C.SearchArea data-testid="searchArea">
    <C.SearchAreaTitle> Filtros de Pesquisa </C.SearchAreaTitle>
      <C.Container>
       <C.Button data-testid = 'buttonTest' onClick={ () => handleClick(filters.FiltredById) }> Buscar Por Id </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByName) }>
          Buscar Por Nome  </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByInitial) }>
          Buscar Por Sigla
       </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByRegion) }>  Buscar Por Região </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByTypeRegion) }>
          Buscar Por Localização  </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByState) }>
          Buscar Por Estado
       </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByType) }>
          Buscar Por Tipo
       </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByCreatedAt) }>
          Buscar Por Data de Criação
       </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByUpdatedAt) }>
          Buscar Por Data de  Atualização
       </C.Button>   
      </C.Container>
    <C.ListButtonsDiv>
      <C.ListButtons onClick={ () => handleClick(filters.FullList) }>
          Listar Todas Universidades
      </C.ListButtons>
      <C.ListButtons onClick={ () => handleClick(filters.FirstList) }>  Listar Primeiras 10 </C.ListButtons>
      </C.ListButtonsDiv>
       { 
        showInput ? (
        <C.InputLabel>
        <C.InputTitle>  
        <p>Buscando Por  {`${typeFilter}`}</p>  
        </C.InputTitle>
         <C.Input data-testid="input" placeholder='Pesquise Aqui!' onChange={({target})=> handleChange(target.value)} value={valueInput}></C.Input>
        </C.InputLabel>
         ) : null
        }
    </C.SearchArea>
);
}

export default SearchArea;