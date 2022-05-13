import * as C from './styles';
import { useContext, useEffect } from 'react';
import { UniversitiesContext } from '../../context/UniversitiesContext';
import { useApiInterface } from '../../hooks/useApiInterface';
import { filters } from '../../helpers/filters'

export const FiltredList = () => {

  const { typeFilter, valueInput } = useContext(UniversitiesContext);
  const { universitiesList, getAll } = useApiInterface()

  const FirstList = () => {
    return universitiesList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {
      if(index < 10){
        return  (
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
        )
      }
      else {
        return (
          null
        )
      }
     })
  }

  const FullList = () => {
    return universitiesList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {         
        return  (
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
        )
     })
  }

   const FiltredById = () => {
    if( typeFilter === filters.FiltredById) {
      return universitiesList.sort((a, b) => (a.id < b.id) ? -1 : 1).filter((item) => {
        if(item.id.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {    
        return  (
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
        )
     })
    }
  }
 
  const FiltredByName = () => {
    if( typeFilter === filters.FiltredByName) {
      return universitiesList.sort((a, b) => (a.name < b.name) ? -1 : 1).filter((item) => {
        if(item.name.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {     
        return  (
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
        )
     })
    } 
  } 

  const FiltredByInitial = () => {
    if( typeFilter === filters.FiltredByInitial) {
      return universitiesList.sort((a, b) => (a.initial < b.initial) ? -1 : 1).filter((item) => {
        if(item.initial.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {
           
        return  (
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
        )
     })
    }
  }

  const FiltredByRegion = () => {
    if( typeFilter === filters.FiltredByRegion) {
      return universitiesList.sort((a, b) => (a.region < b.region) ? -1 : 1).filter((item) => {
        if(item.region.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {      
        return  (
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
        )
     })
    }
  }

  const FiltredByTypeRegion = () => {
    if( typeFilter === filters.FiltredByTypeRegion) {
      return universitiesList.sort((a, b) => (a.regionType < b.regionType) ? -1 : 1).filter((item) => {
        if(item.regionType.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {      
        return  (
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
        )
     })
    }
  }

  const FiltredByState = () => {
    if( typeFilter === filters.FiltredByState) {
      return universitiesList.sort((a, b) => (a.state < b.state) ? -1 : 1).filter((item) => {
        if(item.state.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {   
        return  (
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
        )
     })
    }
  }

  const FiltredByType = () => {
    if( typeFilter === filters.FiltredByType) {
      return universitiesList.sort((a, b) => (a.type < b.type) ? -1 : 1).filter((item) => {
        if(item.type.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {     
        return  (
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
        )
     })
    }
  }

  const FiltredByDateCreated = () => {
    if( typeFilter === filters.FiltredByCreatedAt) {
      return universitiesList.sort((a, b) => (a.createdAt < b.createdAt) ? -1 : 1).filter((item) => {
        if(item.createdAt.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {     
        return  (
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
        )
     })
    }
  }

  const FiltredByUpdatedAt = () => {
    if( typeFilter === filters.FiltredByUpdatedAt) {
      return universitiesList.sort((a, b) => (a.updatedAt < b.updatedAt) ? -1 : 1).filter((item) => {
        if(item.updatedAt.toString().indexOf(valueInput) > -1) {
          return true;
        }
        else {
          return false;
        }
      }).map((item, index) => {   
        return  (
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
        )
     })
    }
 
  }
  
  useEffect(() => {
    getAll();
  }, [getAll, typeFilter]);


  if( typeFilter === filters.FiltredById){
    return (<tbody> 
    {FiltredById()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByName){
    return (<tbody> 
    {FiltredByName()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByInitial){
    return (<tbody> 
    {FiltredByInitial()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByRegion){
    return (<tbody> 
    {FiltredByRegion()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByTypeRegion){
    return (<tbody> 
    {FiltredByTypeRegion()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByState){
    return (<tbody> 
    {FiltredByState()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByType){
    return (<tbody> 
    {FiltredByType()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByCreatedAt){
    return (<tbody> 
    {FiltredByDateCreated()}
    </tbody>
    )
  }

  if( typeFilter === filters.FiltredByUpdatedAt){
    return (<tbody> 
    {FiltredByUpdatedAt()}
    </tbody>
    )
  }

  if(typeFilter === filters.FullList) {
    return (
      <tbody> 
      {FullList()}
      </tbody>
    );
  }

  if(valueInput === '') {
    return (
      <tbody> 
      {FullList()}
      </tbody>
    );
  }

return (
  <tbody> 
  {FirstList()}
  </tbody>
);
}

export default FiltredList;