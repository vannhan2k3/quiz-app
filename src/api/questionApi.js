import axios from "axios"
import axiosClient from "./axiosClient"

const questionApi = {
    getQuestion: (param)=>{
        const url = "/api.php"
        return axiosClient.get(url,{
            params:param
        })
    }
}

export default questionApi 