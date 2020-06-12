import axios from 'axios'
import { getToken } from './auth'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export const registerUser = formData => {
  return axios.post(`/api/auth/register/`, formData)
}

export const loginUser = formData => {
  return axios.post(`/api/auth/login/`, formData)
}

export const getCurrentUser = () => {
  return axios.get (`api/auth/profile/`, withHeaders())
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

export const getAllReviews = () => {
  return axios.get(`/api/reviews/`, withHeaders())
}

export const createReview = formData => {
  return axios.post(`api/reviews/`, formData, withHeaders())
}

export const editReview = (id, formData) => {
  return axios.put(`api/reviews/${id}`, formData, withHeaders())
}

export const deleteReview = id => {
  return axios.delete(`api/reviews/${id}`, withHeaders())
}