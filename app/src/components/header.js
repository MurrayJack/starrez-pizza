import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: #0097ec;
    padding: 10px 20px;
    position: sticky;
    top: 0;
    z-index: 1;
    display: none;
`

const StyledH1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 1.4em;
    letter-spacing: 0.25px;
    font-weight: normal;
    color: #f5f6fa;
`

const Header = ({ siteTitle }) => (
    <StyledHeader >
        <StyledH1>
            {siteTitle}
        </StyledH1>
    </StyledHeader>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
