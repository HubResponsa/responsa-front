import axios from 'axios'

const PATH = 'noticias'

const instance = axios.create({
  baseURL: '0.0.0.0:8080',
})

export const noticiasService = {
  getNoticias: () => instance.get(`${PATH}`),
}
