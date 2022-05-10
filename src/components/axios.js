import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-ecomm-sample-74021.cloudfunctions.net/api"
    // "http://localhost:5001/ecomm-sample-74021/us-central1/api"  API endpoint through express 
})

export default instance;