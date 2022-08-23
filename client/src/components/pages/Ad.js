import React from "react";

export default function Ad(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Name: {props.name}</h5>
                </div>
            </div>
        </div >
    );

}
