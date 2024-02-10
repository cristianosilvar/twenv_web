import axios from 'axios'

const services = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const responseDataErr = {
  sucess: false,
  data: null,
  message: 'Houve algum erro. Tente novamente mais tarde.',
}

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

        return responseDataErr
      }

      // Erro no lado do servidor
      if (error.response?.status === 500 && !originalRequest.retry) {
        originalRequest.retry = true

        return responseDataErr
      }

      return null
    } catch (err) {
      console.log('err')

      return responseDataErr
    }
  }
)

export default services
