import React, { useState } from "react";
import RequestTitle from './RequestTitle';
import RequestDetails from './RequestDetails';
import RequestControls from './RequestControls';
import RequestActions from './RequestActions';
import FullDetails from './FullDetails';
import "./Card.css";

const RequestContainer = () => {
    const [reqDetails, setRequestDetails] = useState({
        reqRef: "SET29383ABCH",
        category: "Payment",
        reqStatus: "Pending authorisation"
    });
    return (
        <> 
            <section className="flex-box space-between">
                <RequestTitle />
                <div className="flex-box space-around cta-container">
                    <RequestControls />
                    <RequestActions />
                </div>
            </section>
            <section className="flex-box space-between">
                <div className="flex-box space-evenly list-container">
                    <RequestDetails reqDetails={reqDetails}/>
                </div>
                <div>
                    <FullDetails />
                </div>
            </section>
        </>
    )
}

export default RequestContainer;