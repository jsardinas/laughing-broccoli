import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_AD } from '../../utils/queries';
import ClassifiedsAdCard from "./ClassifiedsAdCard";

export default function Classifieds() {
    const { loading, error, data } = useQuery(QUERY_AD);
    console.log('loading:', loading);
    console.log('error:', error);
    console.log('data:', data);
    const adInfo = data?.ads || [];

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            {adInfo.map((ad) => (
                <ClassifiedsAdCard title={ad.title} description={ad.description} username={ad.username} />
            ))}

        </div>
    );
}
