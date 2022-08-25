import React from "react";

export default function ClassifiedsAd({title, description, username}) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <h3>{username}</h3>
                </div>
            </div>
        </div >
    );

}
