import React from "react"
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: transparent;
    height: 100%;
    border: 0;
    cursor: pointer;
    border: 1px solid #dcdde1;
    padding: 4px;
    margin: 0;
    border-radius: 5px;
    overflow: hidden;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
`

const ImageButton = ({ URL, OnClick }) => {
    return (
        <StyledButton type="button" onClick={OnClick}>
            <StyledImg alt="pizza" src={URL} />
        </StyledButton>);
}

export default ImageButton
