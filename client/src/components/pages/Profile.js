import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_MY_ADS } from '../utils/queries';
import ClassifiedsAdCard from "./ClassifiedsAdCard";
import UserAdEdit from './UserAdEdit';
import Auth from '../../utils/auth';

export default function Profile({username}) {
    console.log('render profile: ', username)
    const token = Auth.getToken();
    console.log('token:', token);
    const { loading, error, data } = useQuery(QUERY_MY_ADS,  {
        variables: { username: username, token: token },
      });
    console.log(data);
    console.log('username:', username);

    const adInfo = data?.myads || [];

    
    if (Auth.loggedIn()){
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (<>
            <UserAdEdit username={username}/>
            <div>
                {adInfo.map((ad) => (
                    <ClassifiedsAdCard key={ad._id} title={ad.title} description={ad.description} username={ad.username} date={ad.date}/>
                ))}
            </div>
            </>
        );
    }
    return (
        <p>
          You need to be logged in.
        </p>
    );
}
