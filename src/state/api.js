import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {'Content-type': 'application/json; charset=UTF-8'}
})

export default api