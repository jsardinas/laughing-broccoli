import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_AD } from '../utils/queries';
import ClassifiedsAdCard from "./ClassifiedsAdCard";

export default function Classifieds({handlePageChange}) {
    console.log('render Classifieds');
    const { loading, error, data } = useQuery(QUERY_AD);
    console.log('loading:', loading);
    console.log('error:', error);
    console.log('data:', data);
    const adInfo = data?.all_ads || [];

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            {adInfo.map((ad) => (
                <ClassifiedsAdCard key={ad._id} id={ad._id} title={ad.title} description={ad.description} username={ad.username} date={ad.date} handlePageChange={handlePageChange}/>
            ))}

        </div>
    );
}
