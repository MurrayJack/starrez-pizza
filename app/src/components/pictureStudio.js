import React from "react"
import styled from 'styled-components'
import ImageButton from "./imageButton";
import { StaticQuery, graphql } from "gatsby"

const StyledWrapper = styled.div`
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0px;
    
    > *:first-of-type {
        grid-column: 1 / span 4;
        height: 500px;
    }
`;

const PictureStudio = ({ onClick }) => {
    return (
        <StaticQuery
            query={graphql`
                {
                    allSanityImages {
                        nodes {
                            image {
                                asset {
                                    url
                                }
                            }
                        }
                    }
                }
        `}
            render={data => (
                <StyledWrapper>
                    {data.allSanityImages.nodes.map((e, i) => 
                        <ImageButton 
                            key={i} 
                            IsLarge={i == 0}
                            Caption="Innovation Day 2019"
                            OnClick={() => onClick(e._id)} URL={e.image.asset.url} 
                        />)}
                </StyledWrapper>
            )} />
    )
}

export default PictureStudio;
