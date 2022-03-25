import Row from '../Components/Row';
import TopPage from '../Components/TopPage';
import requests from '../requests';


const Series = () => {
    

    return (
        <div>
            <TopPage fetchUrl={requests.fetchPopularTV} />

            <Row title='TOP RATED TV SHOWS' fetchUrl={requests.fetchTopRatedTV} />

            <Row title='Airing Today' fetchUrl={requests.fetchAiringTodayTV} />

            <Row title='ON AIR' fetchUrl={requests.fetchOnAirTV} />

        </div>
    )
}

export default Series;