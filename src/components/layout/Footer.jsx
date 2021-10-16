import { Divider } from "antd"
import { nanoid } from "nanoid"
import styled from "styled-components"
import Container from '../common/Container'
import download from '../../img/download.png'
import { Link } from "react-router-dom"

const listObj = {
  '客服中心': [
    {name: '幫助中心', href: '#'},
    {name: '蝦皮商城', href: '#'},
    {name: '付款方式', href: '#'},
    {name: '蝦皮錢包', href: '#'},
    {name: '蝦幣', href: '#'},
  ],
  '關於蝦皮': [
    {name: '關於蝦皮', href: '#'},
    {name: '加入我們', href: '#'},
    {name: '蝦皮條款', href: '#'},
  ],
  '付款': [
    {name: '物流合作', href: '#'},
    {name: '蝦皮直送', href: '#'}
  ],
  '關注我們': [
    {name: 'facebook', href: '#'},
    {name: 'instagram', href: '#'},
    {name: 'line', href: '#'},
    {name: 'linkedId', href: '#'},
    {name: '部落格', href: '#'},
  ]
}

const locationList = ['新加坡', '印尼', '台灣', '泰國', '馬來西亞', '菲律賓', '越南', '巴西']

const StyledAppFooter = styled.footer`
  background-color: #fbfbfb;
  padding-top: 40px;
`

const StyledSection = styled.div `
  width: 33.333%;

  @media(min-width: 769px){
    width: 20%;
  }

  p{
    font-weight: bold;
  }

  ul{
    list-style: none;
    padding: 0;
  }

  ul li{
    padding-bottom: 4px;
  }

  ul li a{
    color: rgba(0, 0, 0, .54);
  }
`
const StyledLocalSection = styled.div `

  a{
    color: black;
    padding: 5px;
  }

  a:not(:last-child){
    border-right: .5px solid rgba(0,0,0,.2);
  }
`

const Flex = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px 0;
  flex-wrap: wrap;
`

const Footer = () => {
  return (
    <StyledAppFooter>
      <Container>
        <Flex>
          {
            Object.keys(listObj).map(key => (
              <StyledSection key={nanoid()}>
                <p>{key}</p>
                <ul>
                  {listObj[key].map(list => <li key={nanoid()}><Link to={list.href}>{list.name}</Link></li>)}
                </ul>
              </StyledSection>
            ))
          }
          <StyledSection>
            <p>下載蝦皮</p>
            <img src={download} alt="download" style={{maxWidth: '100%'}}/>
          </StyledSection>
        </Flex>       
        <Divider /> 
        <Flex>
          <span>© 2021 Shopee. 版權所有。</span>
          <StyledLocalSection>
            <span>國家和地區：</span>
            {locationList.map(location => <Link to="#" key={nanoid()}>{location}</Link>)}
          </StyledLocalSection>
        </Flex>
      </Container>
    </StyledAppFooter>
  )
}

export default Footer
