import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_AD } from '../utils/queries';
import ClassifiedsAdCard from "./ClassifiedsAdCard";
import UserAdEdit from './UserAdEdit';

export default function Profile() {
    const { loading, error, data } = useQuery(QUERY_AD);
    console.log('loading:', loading);
    console.log('error:', error);
    console.log('data:', data);
    const adInfo = data?.ads || [];

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (<>
        <UserAdEdit/>
        <div>
            {adInfo.map((ad) => (
                <ClassifiedsAdCard title={ad.title} description={ad.description} username={ad.username} date={ad.date}/>
            ))}
        </div>
        </>
    );
}
