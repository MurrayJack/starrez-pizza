import React from "react";
import styled from "styled-components";

const Section = styled.section`
    background-color: ${(p) => p.BGColor};
    color: ${(p) => p.Color};
`;

const Article = styled.article`
    width: 100%;

    @media (min-width: 920px) {
        width: 960px;
        margin: 0 auto;
        padding: 40px;
    }    
`;

export default ({children, BGColor, Color}) => 
    <Section Color={Color} BGColor={BGColor}>
        <Article>
            {children}
        </Article>
    </Section>