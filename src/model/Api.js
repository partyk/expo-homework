import axiosLib from "axios"

export const axios = axiosLib.create({
    baseURL: "http://api.themoviedb.org/3/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json", // odpoved hlavicky co chci
    },
});

export const loadMovies = () => {
    return axios.get(
        "/movie/top_rated?api_key=4aa883f95999ec813b8bfaf319f3972b"
    )
};