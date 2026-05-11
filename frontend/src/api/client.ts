import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('请求超时')
    } else if (error.response) {
      const status = error.response.status
      if (status === 403) {
        console.error('无权限访问')
      } else if (status === 500) {
        console.error('服务器错误，请稍后重试')
      }
    } else if (error.request) {
      console.error('网络连接失败，请检查网络')
    }
    return Promise.reject(error)
  }
)

export const joinWaitlist = (email: string) => api.post('/waitlist', { email })

export default api
