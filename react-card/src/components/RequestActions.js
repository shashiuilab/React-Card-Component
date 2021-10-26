import React from 'react';
import Styled from 'styled-components';

function RequestActions() {
    const handleReject = () => { console.log('Rejected')};
    const handleAuthorise = () => { console.log('Authorise')};
    const BtnSecondary = Styled.button`
        background-color: var(--LightSlat);
        color: var(--White);
    `
    const BtnTeritiary = Styled.button`
        background-color: var(--White);
        color: var(--graphite);
    `
    return (
        <div className="flex-box space-between">
            <BtnTeritiary className="button" onClick={handleReject}>Reject</BtnTeritiary>
            <BtnSecondary className="button" onClick={handleAuthorise}>Authorise</BtnSecondary>
        </div>
    );
}

export default RequestActions;