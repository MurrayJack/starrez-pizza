import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components";
import { Link } from "gatsby"

const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: 300px 1fr;
    width: 100vw;
`;

const StyledAside = styled.aside`
    padding: 10px 20px;
`;

const StyledMenu = styled.div`
    position: fixed;
`

const StyledUL = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const StyledLI = styled.li`
    line-height: 30px;
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

                allSanityEvent {
                    nodes {
                        name
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
                        <StyledMenu>
                            <h2>The Team</h2>
                            <StyledUL>
                                {data.allSanityTeam.nodes.map((e) => <StyledLI>{e.name}</StyledLI>)}
                            </StyledUL>

                            <h2>Events</h2>
                            <StyledUL>
                                <li>
                                    {data.allSanityEvent.nodes.map((e) => <StyledLI>{e.name}</StyledLI>)}
                                </li>
                            </StyledUL>
                        </StyledMenu>
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
