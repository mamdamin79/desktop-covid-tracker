import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    const response = await axios.get(url)
    return response.data
}

export const fetchDailyData = async () => {
    const response = await axios.get(`${url}/daily`)
    return response.data
}

export const fetchCountries = async () =>{
    const response = await axios.get(`${url}/countries`)
    return response.data
}

export const fetchCountryData = async (country) =>{
    const response = await axios.get(`${url}/countries/${country}`)
    return response.data
}