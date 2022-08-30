import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_AD } from '../utils/queries';
import ClassifiedsAdCard from "./ClassifiedsAdCard";
import UserAdEdit from './UserAdEdit';
import Auth from '../../utils/auth';

export default function Profile() {
    const { loading, error, data } = useQuery(QUERY_AD);
    console.log('loading:', loading);
    console.log('error:', error);
    console.log('data:', data);
    const adInfo = data?.ads || [];

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (Auth.loggedIn())
        return (<>
            <UserAdEdit/>
            <div>
                {adInfo.map((ad) => (
                    <ClassifiedsAdCard title={ad.title} description={ad.description} username={ad.username} date={ad.date}/>
                ))}
            </div>
            </>
        );
    return (
        <p>
          You need to be logged in. Please{' '}
          <a href="/login">login</a>
        </p>
    );
}
