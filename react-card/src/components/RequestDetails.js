import React from 'react';

function RequestDetails({ reqDetails }) {
    const { reqRef, category, reqStatus } = reqDetails;
    return (
        <>
            <div className="border-right pad-right-1">
                <p className="primary-label">Request reference</p>
                <p className="secondary-label">{ reqRef }</p>
            </div>
            <div className="border-right pad-left-1 pad-right-1">
                <p className="primary-label">Category</p>
                <p className="secondary-label">{ category }</p>
            </div>
            <div className="pad-left-1">
                <p className="primary-label">Request status</p>
                <p className="secondary-label">{ reqStatus }</p>
            </div>
        </>
    );
}


export default RequestDetails;