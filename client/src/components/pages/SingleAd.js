import React from "react";
import { useQuery } from '@apollo/client';
import {A} from '../../styled/styled'
import { QUERY_SINGLE_AD } from "../utils/queries";

export default function SingleAd({id, title, description, username, date, handlePageChange}) {
    console.log('render singlead: ', {id})
    const { loading, error, data } = useQuery(QUERY_SINGLE_AD,  {
        variables: { adId: id },
      });
    console.log('loading:', loading);
    console.log('error:', error);
    console.log('data:', data);
    const adInfo = data?.ads || [];
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>{adInfo.title}</h1>
                    <h2>{adInfo.description}</h2>
                    <h4>{`Posted by ${adInfo.username} on ${adInfo.date}`}</h4>
                </div>
            </div>
        </div >
    );
}
