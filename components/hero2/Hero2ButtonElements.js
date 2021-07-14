import styled from "styled-components";

export const ButtonContainer = styled.div`
    border: 1px solid white;
    padding: 6px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        border-color: #24cee5;
        color: #24cee5;
    }
    @media (max-width: 640px){
        font-size: 16px;
    }
`