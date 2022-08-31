import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import {A, Button} from '../../styled/styled'
import { QUERY_SINGLE_AD } from "../utils/queries";
import Auth from '../../utils/auth';
import {REMOVE_ADVERTISEMENT} from '../utils/mutations';

export default function SingleAd({id}) {
    console.log('render singlead: ', {id})
    const { loading, error, data } = useQuery(QUERY_SINGLE_AD,  {
        variables: { adId: id },
      });
    console.log('loading:', loading);
    console.log('error:', error);
    console.log('data:', data);
    const adInfo = data?.ads || [];

    const [removeAd, {removeError} ] = useMutation(REMOVE_ADVERTISEMENT);

    const isOwner = Auth.loggedIn() && Auth.getProfile().username === adInfo.username;

    const deleteAd = async (id) => {
        const result = await removeAd({
            variables:{adId: id}
        });
        alert(result);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>{adInfo.title}</h1>
                    <h2>{adInfo.description}</h2>
                    <h4>{`Posted by ${adInfo.username} on ${adInfo.date}`}</h4>
                </div>
            </div>
            {isOwner === true? (<Button onClick={() => deleteAd(id)}>Delete Ad</Button>):(<></>)}
        </div >
    );
}
