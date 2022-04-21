import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    const response = await axios.get(url)
    return response.data
}
