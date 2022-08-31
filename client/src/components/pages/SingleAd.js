import React from "react";
import {A} from '../../styled/styled'

export default function SingleAd({id, title, description, username, date, handlePageChange}) {
    console.log('render singlead')
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>{'title'}</h1>
                    <h2>{'description'}</h2>
                    <h3>{'username'}</h3>
                    <h4>{'date'}</h4>
                </div>
            </div>
        </div >
    );
}
