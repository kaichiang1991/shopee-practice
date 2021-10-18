import React from 'react'
import {Link} from 'react-router-dom'
import styled, { css } from 'styled-components'
import Container from '../common/Container'
import logo from '../../img/logo.png'
import {
  Input
} from 'antd'
import {
  ShoppingCartOutlined
} from '@ant-design/icons'

const {Search} = Input

const StyledHeader = styled.header`
  background-color: #D0061A;
  padding: 16px 0;

  ${props => props.fixed && css`
    position: fixed;
    width: 100%;
    z-index: 1;
  `}
`

const StyledHeaderSection = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

const StyledNavigator = styled.div `
  a{
    padding: 0 6px;
    text-decoration: none;
    color: #fff;
    border-right: 2px solid hsla(0,0%,100%,.22);
  }
`

const StyledToolBar = styled.div `
  a{
    padding: 0 8px;
    text-decoration: none;
    color: #fff;
    border-right: 2px solid hsla(0,0%,100%,.22);
  }
`

const StyledLogoSection = styled.div `
  color: #fff;
  display: flex;
  align-items: center; 

  img{
    padding-right: 8px;
    border-right: 2px solid hsla(0,0%,100%,.22);
  }

  h1{
    padding-left: 8px;
    margin: 0;
    color: #fff;
  }

  .logo-container{
    display: flex;
    align-items: center;
  }
`

const StyledSearchSection = styled.div `

  display: flex;
  align-items: center;
  
  .search-container{
    display: flex;
    align-items: center;
  }
`

const Header = ({fixedHeader})=>{
  return (
    <StyledHeader fixed={fixedHeader}>
      <Container>
        <StyledHeaderSection>
          <StyledNavigator>
            <Link to="/mall">蝦皮購物</Link>
            <Link to="/download">下載</Link>
            <Link to="/follow">追蹤我們</Link>
            <Link to="/blog">蝦皮輯部落客</Link>
          </StyledNavigator>
          <StyledToolBar>
            <Link to="/">通知總覽</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">帳號</Link>
          </StyledToolBar>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <StyledLogoSection>
            <Link to="/mall"><img src={logo} alt="logo" height={52} /></Link>
            <Link to="/mall"><h1>蝦皮購物</h1></Link>
          </StyledLogoSection>
          <StyledSearchSection>
              <Search placeholder="在商城搜尋" onSearch={()=>{}} enterButton />  
              <Link to="/cart"><ShoppingCartOutlined style={{fontSize: 32, paddingLeft: 8, color: '#fff'}}/></Link>
          </StyledSearchSection>
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  )
}

export default Header
