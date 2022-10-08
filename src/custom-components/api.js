import axios from 'axios'

const API = axios.create({
  baseURL: `${typeof window !== 'undefined' && window.location.href}api`,
  timeout: 30000,
})

export default API