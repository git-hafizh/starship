import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const BASE_API = "https://swapi.dev/api/starships/"

export default function useFetchShip(page){
    const [ships, setShips] = React.useState([]);

    React.useEffect(() => {
        trackPromise(
            axios.get(`${BASE_API}?page=${page}`).then((result) => {
                const newShips = result.data.results;
                setShips([...ships, ...newShips]);
            })
            .catch((error) => {
                console.log(error);
            })
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])

    return [ships, setShips];
}