import { useState } from 'react';
import * as C from './styles';
import { ALL_STATES } from '../../data/states';

export const InputArea = () => {

  return (
      <C.Container>
        <C.InputLabel>
          <C.InputTitle>Id</C.InputTitle>
          <C.Input type="number" />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Name</C.InputTitle>
          <C.Input type="text" />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Sigla</C.InputTitle>
          <C.Input type="text" />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Região</C.InputTitle>
          <C.Select>
            <>
              <option>Sudeste</option>
              <option>Sul</option>
              <option>Centro-Oeste</option>
              <option>Nordeste</option>
              <option>Norte</option>
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Localização</C.InputTitle>
          <C.Select>
            <>
              <option>Interior</option>
              <option>Capital</option>
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Estado</C.InputTitle>
          <C.Select>
             {ALL_STATES.map((item, index)=> (
               <option key={index}>{item}</option>
             ))}
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Tipo</C.InputTitle>
          <C.Select>
            <>
              <option>Privada</option>
              <option>Publica</option>
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Data de Criação</C.InputTitle>
          <C.Input type="date" />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Data de Atualização</C.InputTitle>
          <C.Input type="date" />
        </C.InputLabel>
          </C.Container>
);
}