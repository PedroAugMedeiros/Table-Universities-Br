import * as C from './App.styles';
import { useState } from 'react';
import { ApiService }from './services/ApiService';

const App = () => {
 const [universities, setUniversities] = useState(ApiService.getAll)

return (
  <C.Container>
    <C.Header>
    <C.HeaderText>List Universities Brazil </C.HeaderText>
    </C.Header>
    <C.Body>
      {/* Area de informações */}
      {/* Area de informações */}
      </C.Body>
  </C.Container>
);
}

export default App