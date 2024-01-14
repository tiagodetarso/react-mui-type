import axios from 'axios'
import { responseInterceptor, errorInterceptor } from './intercepetors'

const Api = axios.create({
    baseURL: 'http://localhost:3333'
})


Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
)

export { Api }