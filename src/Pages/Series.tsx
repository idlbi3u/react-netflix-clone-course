import React, { useState } from "react";

interface Series{
    name: string;
    description: string;
    poster: string;
}

const Series = (props: any) => {
    const [Series, setSeries] = useState<Series[]>();
    
    return (
        <div>
            <h1>Series</h1>
        </div>
    )
}

export default Series;