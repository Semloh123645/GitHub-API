import axios from "axios";

const api = axios.create({
    baseURL: "http://api.github.com/",
})

export default api
// api.get('user/benits')