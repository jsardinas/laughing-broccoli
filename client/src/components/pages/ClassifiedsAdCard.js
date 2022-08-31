import React from "react";
import {A} from '../../styled/styled'

export default function ClassifiedsAd({id, title, description, username, date, handlePageChange}) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1><A href="#" onClick={() => handlePageChange({page:"SingleAd", arg:{id}})}>{title}</A></h1>
                    <h4>{`posted by ${username} on ${date}`}</h4>
                </div>
            </div>
        </div >
    );

}
