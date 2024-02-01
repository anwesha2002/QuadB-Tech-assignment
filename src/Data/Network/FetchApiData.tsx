import axios from "axios";

export function FetchApiData(){
    return axios.get('https://api.tvmaze.com/search/shows?q=all')
}