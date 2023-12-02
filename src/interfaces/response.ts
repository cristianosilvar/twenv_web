export interface ResponseInterface<T = unknown> {
  sucess: boolean
  message: string
  data: T
}
