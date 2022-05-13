import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Header from './components/Header';
import SearchArea from './components/SearchArea'

describe('Testa Component Header', () => {
  it('testa se existe um header', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('testa se o header contem um o texto esperado', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    const p = screen.getByText(/Tabela de Universidades Brasileiras/i);
    expect(header).toContainElement(p);
  });
});

describe('Testa SearchArea', () => {
  it('testa se contem  o texto esperado', () => {
    render(<SearchArea />);
    const searchArea = screen.getByTestId('searchArea');
    const h2 = screen.getByText('Filtros de Pesquisa');
    expect(searchArea).toContainElement(h2);
  });

  it('testa se contem 11 botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(11)
  });

  it('testa se somente ao clicar em um botão aparece o input', () => {
    render(<App />);

   const button = screen.getByRole('button',{
     name: 'Listar Por Nome'
   }) 
   
   userEvent.click(button)
   const input = screen.getByTestId('input')
   expect(input).toBeInTheDocument();
  });
});

