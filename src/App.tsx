import * as C from './App.styles';
import  Header  from './components/Header';
import { UniversitiesContextProvider } from './context/UniversitiesContext';
import { SearchArea } from './components/SearchArea';
import { TableArea } from './components/TableArea';

const App = () => {

return (
  <C.Container>
    <Header />
    <C.Body>
      <UniversitiesContextProvider>
      <SearchArea />
      <TableArea />
      </UniversitiesContextProvider>
      </C.Body>
  </C.Container>
);
}

export default App;