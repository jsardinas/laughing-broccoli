import React from "react";
import Ad from "./Ad";

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
                <Ad name={ad.title} />
            ))}

        </div>
    );
}
