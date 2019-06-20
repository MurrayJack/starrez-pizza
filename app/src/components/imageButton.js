import React from "react"
import styled from 'styled-components'

const StyledButton = styled.div`
    background-color: transparent;
    height: 100%;
    border: 0;
    cursor: pointer;
    margin: 0;
    overflow: hidden;
    position: relative;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 2px;
`

const StyledCaption = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.45px;
    color: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 40px;
    text-align: center;
    display: grid;
    align-items: center;
`

const StyledHover = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.45px;
    color: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 14px;
    text-align: center;
    display: grid;
    align-items: center;
    opacity: 0;
    transition: all ease-in-out 0.25s;
    padding: 0 10px;

    &:hover {
        opacity: 1;
    }
`

const ImageButton = ({ URL, OnClick, IsLarge, Caption }) => {
    return (
        <StyledButton className={IsLarge && "initial"}>
            <StyledImg alt="pizza" src={URL} />
            {IsLarge ? <StyledCaption>{Caption}</StyledCaption> : <StyledHover>{Caption}</StyledHover>}
        </StyledButton>);
}

export default ImageButton
