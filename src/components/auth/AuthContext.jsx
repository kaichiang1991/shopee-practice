import React, {createContext, useEffect, useState} from 'react'

const LOGIN_KEY = 'SHOPEE.auth'
const defaultContextValue = {
  isAuthenticated: false
}

const AuthContext = createContext(defaultContextValue)

export const AuthProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(defaultContextValue.isAuthenticated)
  const [username, setUsername] = useState('')

  useEffect(() => {
    try{
      const {token, username} = JSON.parse(localStorage.getItem(LOGIN_KEY))
      
      if(token){
        setIsAuthenticated(true)
        setUsername(username)
      }
    }catch(e){}
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      username,
      // 登入
      login: async (username, password)=>{
        // 簡單的判斷
        if(username && password){
          const obj = {token: 'valid', username}
          setIsAuthenticated(true)
          setUsername(username)
          localStorage.setItem(LOGIN_KEY, JSON.stringify(obj))
          return obj
        }
        
        setIsAuthenticated(false)
        setUsername('')
        return {token: null, error: 'invalid'}
      },
      // 登出
      logout: ()=>{
        setIsAuthenticated(false)
        setUsername('')
        localStorage.removeItem(LOGIN_KEY)
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext