import React from "react";
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

const StyledWrapper = styled.div`
    position: fixed;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;

    [aria-hidden='true'] {
        /* opacity: 1; */
    }
`;

const StyledInfo = styled.div`
    position: fixed;
    width: 50vw;
    background-color: #718093;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
`;


const Information = ({ Visible, ID, OnClose }) => {
    return (
        <StaticQuery
            query={graphql`
                {
                    sanityImages(_id: {eq: "" }) {
                    event {
                        id
                    }
                }
            }
            
        `}
            render={data => (
                <StyledWrapper aria-hidden={Visible} onClick={OnClose}>
                    <StyledInfo aria-hidden={Visible}>
                        <h3>Description</h3>
                        <p>

                        </p>
                        <hr />


                    </StyledInfo>
                </StyledWrapper>
            )} />
    )
}
export default Information
