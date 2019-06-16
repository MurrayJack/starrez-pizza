import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from 'styled-components'

const StyledWrapper = styled.div`
    position: fixed;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;

    [aria-hidden='true'] {
        opacity: 1;
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
    const query = gql`
    {
        Images(id: "${ID}" )
        {
            description
            ingredients 
            {
                name
            }
        }
    }
    `;

    return (
        <Query query={query}>
            {({ loading, error, data }) => {
                return (
                    <StyledWrapper aria-hidden={Visible} onClick={OnClose}>
                        <StyledInfo aria-hidden={Visible}>
                            <h3>Description</h3>
                            <p>

                            </p>
                            <hr/>


                        </StyledInfo>
                        {/* <div aria-hidden={Visible}>
                                <h3>Description</h3>
                                <p>{data.Images.description}</p>

                                <hr />

                                <h3>Ingredients</h3>
                                <ul>
                                    {data.Images.ingredients.map(e => <li>{e.name}</li>)}
                                </ul>

                                <hr />

                                <h3>Made For</h3>
                                <p>asdsad</p>
                            </div> */}
                    </StyledWrapper>
                )
            }}
        </Query>
    )
}
export default Information
