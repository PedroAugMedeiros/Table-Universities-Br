import * as C from './App.styles';
import { TableArea } from './components/TableArea';
import { InputArea } from './components/InputArea';

const App = () => {

return (
  <C.Container>
    <C.Header>
    <C.HeaderText>List Universities Brazil </C.HeaderText>
    </C.Header>
    <C.Body>
      <InputArea />
      <TableArea />
      </C.Body>
  </C.Container>
);
}

export default App