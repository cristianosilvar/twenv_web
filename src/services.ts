import axios from 'axios'
const services = axios.create({
  baseURL: 'http://localhost:4000/v1/api',
})

services.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    try {
      const originalRequest = error.config

      if (error.response?.status === 423 && !originalRequest.retry) {
        originalRequest.retry = true

        return {
          data: {
            sucesso: false,
          },
        }
      }

      if (error.response?.status === 405 && !originalRequest.retry) {
        originalRequest.retry = true

        return services(originalRequest)
      }

      if (
        error.response?.status === 400 ||
        (error.response?.status >= 500 && error.response?.status <= 510)
      ) {
        originalRequest.retry = true

        return {
          data: {
            sucesso: false,
          },
        }
      }

      return null
    } catch (err) {
      console.log('err')
      return {
        data: {
          sucesso: false,
        },
      }
    }
  }
)

export default services
