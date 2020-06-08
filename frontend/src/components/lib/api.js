import axios from 'axios'


export const getAllWinemakers = () => {
  return axios.get('/api/winemakers')
} 

export const getOneWinemaker = id => {
  return axios.get(`/api/winemakers/${id}`)
}