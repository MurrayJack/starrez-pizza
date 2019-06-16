import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components";

const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: 300px 1fr;
    width: 100vw;
`;

const StyledAside = styled.aside`
    padding: 10px;
`;

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }

                allSanityTeam {
                    nodes {
                        name
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <StyledArticle>

                    <StyledAside>
                        <h2>The Team</h2>
                        <ul>
                            {data.allSanityTeam.nodes.map((e) => <li>{e.name}</li>)}
                        </ul>
                    </StyledAside>
                    <main>{children}</main>
                </StyledArticle>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
