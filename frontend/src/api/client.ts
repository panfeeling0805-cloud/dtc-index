import axios from 'axios'

const api = axios.create({
  baseURL: '/api',  // vite proxy 转发到 localhost:8000
})

export const joinWaitlist = (email: string) =>
  api.post('/waitlist', { email })

export const sendContact = (data: { name: string; email: string; message: string }) =>
  api.post('/contact', data)

export default api
