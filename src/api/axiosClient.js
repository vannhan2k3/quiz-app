import axios from "axios"; // import thư viện

// tao ra một axios client
const axiosClient = axios.create({
    baseURL: 'https://opentdb.com/',
    headers: {
        "Content-Type": "application/json"
    }
})
export default axiosClient