import * as C from './App.styles';
import { TableArea } from './components/Table/TableArea';

const App = () => {

return (
  <C.Container>
    <C.Header>
    <C.HeaderText>List Universities Brazil </C.HeaderText>
    </C.Header>
    <C.Body>
      <TableArea />
      </C.Body>
  </C.Container>
);
}

export default App