import styled from "styled-components";

export const Display = styled.div`
    display: flex;
    flex-direction: column;

    margin: 100px auto;
    padding: 10px;
    border: 2px solid coral;
    border-radius: 10px;

    width: 50%;
`

export const ItemUserList = styled.li`
    display: flex;
    align-items: center;

    list-style: none;
    text-align: left;
    font-weight: bold;
`

export const IconePlay = styled.img`
    margin: 5px;
    
    width: 1.4vw;
`

export const FormPlay = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr ;
    row-gap: 2vh;
    
    margin-top: 3vh;
    
    text-align: center;
    
    input {
        grid-column-start: 1;
        grid-column-end: 3;
        
        padding: 0.3vh 0.5vw;
        border: 1px solid black;
        border-radius: 5px;
        
        font-size: 1.5vw;
    }

`

export const ButtonAddPlay = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    
    background-color: green;
    color: white;
    
    font-weight: bold;
    
    text-transform: uppercase;

    :hover {
        cursor: pointer;
    }
`

export const ButtonDeletePlay = styled.button`
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    
    background-color: red;
    color: white;
    
    font-weight: bold;
    
    text-transform: uppercase;

    :hover {
        cursor: pointer;
    }
`