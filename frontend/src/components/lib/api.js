import axios from 'axios'

//! POST request needs an id, body, headers

export const registerUser = formData => {
  return axios.post(`/api/auth/register/`, formData)
}

export const loginUser = formData => {
  return axios.post(`/api/auth/login/`, formData)
}

export const getAllWinemakers = () => {
  return axios.get('/api/winemakers')
} 

export const getOneWinemaker = id => {
  return axios.get(`/api/winemakers/${id}`)
}

export const getAllWines = () => {
  return axios.get('/api/winemakers/wines')
} 

export const getOneWine = id => {
  return axios.get(`/api/winemakers/wines/${id}`)
}