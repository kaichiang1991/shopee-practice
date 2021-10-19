import { Button, Input, message, Space } from "antd"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import styled from "styled-components"
import AuthContext from "./AuthContext"

const StyledLoginForm = styled.div `
  background-color: #D0061A;
  padding: 8px;
  width: 40%;
`

const LoginForm = () => {

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const {login, isAuthenticated} = useContext(AuthContext)

  const handleClick = async () => {
    const {error} = await login(account, password)
    if(error){
      message.error(error)
    }
  }

  const history = useHistory()
  useEffect(()=>{
    isAuthenticated && history.push('/') 
  }, [isAuthenticated, history])
  
  return (
    <StyledLoginForm>
      <Space direction='vertical' size='large' style={{width: '100%'}}>
        <div>Form</div>
        <Input placeholder='電話號碼/使用者名稱/Email' value={account} onChange={({target: {value}}) => setAccount(value)}/>
        <Input.Password placeholder='密碼' value={password} onChange={({target: {value}}) => setPassword(value)}/>
        <Button type='primary' block={true} onClick={handleClick}>登入</Button>
      </Space>
    </StyledLoginForm>
  )
}

export default LoginForm