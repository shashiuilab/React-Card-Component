import React from 'react';
import Styled from 'styled-components';

function FullDetails(props) {
    const Link = Styled.a`
        text-decoration: none;
        color: var(--Black);
        margin-right: 1rem;
        :hover {
            text-decoration: underline;
        }
    `
    return (
        <Link href="https://google.com" rel="noreferrer" target="_blank">Full Details <i className="fas fa-caret-down"></i></Link>
    );
}

export default FullDetails;