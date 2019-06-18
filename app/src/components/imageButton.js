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
    transition: all ease-in-out 0.25s;

    &.initial {
        background-color: red;
    }
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

const ImageButton = ({ URL, OnClick, IsLarge, Caption }) => {
    return (
        <StyledButton className={IsLarge && "initial"} type="button" onClick={OnClick}>
            <StyledImg alt="pizza" src={URL} />
            {IsLarge && <StyledCaption>{Caption}</StyledCaption>}
        </StyledButton>);
}

export default ImageButton
