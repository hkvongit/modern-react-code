import axios from "axios"

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
         'Client-ID bf212ee9f25f55cf50152fab5d4ff2019342d0e1623f3c03b11806753d2dc599'
    }
})