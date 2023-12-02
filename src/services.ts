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

      // Erro na validação
      if (error.response?.status === 400 && !originalRequest.retry) {
        originalRequest.retry = true

        return {
          data: {
            sucess: false,
          },
        }
      }

      // Erro no lado do servidor
      if (error.response?.status === 500 && !originalRequest.retry) {
        originalRequest.retry = true

        return services(originalRequest)
      }

      return null
    } catch (err) {
      console.log('err')

      return {
        data: {
          sucess: false,
        },
      }
    }
  }
)

export default services
