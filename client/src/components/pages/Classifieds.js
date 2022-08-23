import React from "react";
import ClassifiedsAdCard from "./ClassifiedsAdCard";

const adInfo = [{
    title: 'title1',
    username: 'username1'
},
{
    title: 'title2',
    username: 'username2'
}
]

export default function Classifieds() {
    return (
        <div>
            {adInfo.map((ad) => (
                <ClassifiedsAdCard name={ad.title} />
            ))}

        </div>
    );
}
