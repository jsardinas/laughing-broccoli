import React from "react";
import Ad from "./Ad";

const adInfo = {
    title: 'Ad 1'
}

export default function Ad() {
    return (
        <div>
            {adInfo.map((ad) => (
                <Ad name={ad.title} />
            ))}

        </div>
    );
}
