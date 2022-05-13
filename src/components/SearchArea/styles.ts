import styled from 'styled-components';

export const SearchArea = styled.div`
background-color: #2A004F;
border-radius: 10px;
padding: 20px;
padding-top: 0;
margin-top: 20px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
color: #00DBAF;
max-width: 80vw;
margin-left: 20vh;
margin-rigth: 10vh;
`;

export const ListButtonsDiv = styled.div`
background-color: #2A004F;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-around
`;

export const Container = styled.div`
    background-color: #2A004F;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
`;

export const ListButtons = styled.button`
cursor: pointer;
background: #00DBAF;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 10px;
hight: 2em;
border: 2px solid #2A004F;
width: 30%;
height: 20vh%;
&:hover
{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        box-shadow: 0 4px 5px 3px rgba(119,53,136,.459)!important;
}
`;

export const Button = styled.button`
cursor: pointer;
background: #00DBAF;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 10px;
hight: 2em;
border: 2px solid #2A004F;
width: 30%;
height: 20vh%;
&:hover
{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        box-shadow: 0 4px 5px 3px rgba(119,53,136,.459)!important;
}
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;

export const SearchAreaTitle = styled.h2`
color: #00DBAF;
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
