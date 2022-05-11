import styled from 'styled-components';

export const Container = styled.div`
    position: center;
    background-color: #2A004F;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #00DBAF;
    justify-content: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;