import React, {useState} from 'React';


interface Films {
    name: string;
    description: string;
    poster: string;
}

const Films = (props: any) => {
    const [Films, setFilms] = useState<Films[]>();

    return (
        <div>
            <h1>Films</h1>
        </div>
    )
}

export default Films;