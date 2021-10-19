import React from 'react'
import styled from 'styled-components'
import Container from '../components/common/Container'
import Image from '../components/common/Image'
import DefaultLayout from '../components/layout/DefaultLayout'
import LoginForm from '../components/auth/LoginForm'

const StyledLoginBox = styled.div`
  width: 100%;
  background-color: white;
  padding: 48px;
`

const StyledLoginContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const LogoContainer = styled(Image) `
  width: 50%;
`

const LoginPage = () => {
  return (
    <DefaultLayout>
      <StyledLoginBox>
        <StyledLoginContainer>
          <LogoContainer height={300} url={'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}/>
          <LoginForm />
        </StyledLoginContainer>
      </StyledLoginBox>
    </DefaultLayout>
  )
}

export default LoginPage
