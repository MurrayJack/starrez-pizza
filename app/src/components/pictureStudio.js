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
                            description
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
                    <ImageButton
                        IsLarge={true}
                        Caption="Innovation Day: 2019"
                        URL={data.allSanityImages.nodes[0].image.asset.url}
                    />

                    {data.allSanityImages.nodes.map((e, i) =>
                        <ImageButton
                            key={i}
                            OnClick={() => onClick(e._id)}
                            Caption={e.description}
                            URL={e.image.asset.url}
                        />)}
                </StyledWrapper>
            )} />
    )
}

export default PictureStudio;
