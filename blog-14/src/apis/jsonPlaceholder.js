import axios from "axios"

// Axios allows us to define a base instance in which we can define a URL and any other configuration elements using "axios.create" function which take the baseURL as property of the object inside the function 


export default axios.create({
    baseURL:  "https://jsonplaceholder.typicode.com"     
})