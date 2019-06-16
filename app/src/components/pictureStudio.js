import React from "react"
import styled from 'styled-components'
import ImageButton from "./imageButton";
import { StaticQuery, graphql } from "gatsby"

const StyledWrapper = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px;
`;

const PictureStudio = ({ onClick }) => {
    return (
        <StaticQuery
            query={graphql`
                query PhotoImages {
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
                    {data.allSanityImages.nodes.map((e, i) => <ImageButton key={i} OnClick={() => onClick(e._id)} URL={e.image.asset.url} />)}
                </StyledWrapper>
            )} />
    )
}

export default PictureStudio;
