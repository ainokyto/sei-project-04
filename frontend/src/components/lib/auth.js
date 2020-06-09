export const setToken = token => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}

// Removing token from local storage will log user out

export const logOut = () => {
  localStorage.removeItem('token')
}

// Functions to decode tokens so that any sensitive information can't be extracted from them

const getPayload = () => {
  const token = getToken() // Returns the decoded data from the token or false
  if (!token) return false 
  const parts = token.split('.') 
  if (parts.length < 3) return false 
  return JSON.parse(window.atob(parts[1]))
}

// Function to check whether the user that created review is the same user logged in 

export const isOwner = id => { 
  const userId = getPayload().sub
  return userId === id 
}

// Function to work out if user is logged in or not 

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false 
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export const getUserId = () => {
  return getPayload()
}