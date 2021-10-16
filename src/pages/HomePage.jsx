import React from 'react'
import {Link} from 'react-router-dom'
import DefaultLayout from '../components/layout/DefaultLayout'
import ClearFix from '../components/common/ClearFix'
import styled from 'styled-components'
import { Carousel } from 'antd'
import banner1 from '../img/banner/banner1.jpg'
import banner2 from '../img/banner/banner2.jpg'
import banner3 from '../img/banner/banner3.jpeg'

const StyledBannerSection = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`
const CarouselContainer = styled.div `
  width: 100%;
  padding: 2px;

  @media(min-width: 769px){
    width: 66.67%;
  }
`

const BannerSectionContainer = styled.div `
  width: 100%;
  padding: 2px;

  @media(min-width: 769px){
    width: 33.33%;
  }
`

const BannerImageContainer = styled.div `
  display: inline-block;
  width: 50%;

  :not(:last-child){
    padding-bottom: 0;
    padding-right: 2px;
  }

  @media(min-width: 769px){
    display: block;
    width: 100%;
    
    :not(:last-child){
      padding-bottom: 2px;
      padding-right: 0;
    }
  }
`

const StyledBannerFeatureContainer = styled.div `
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`

const StyledBannerColumn = styled.div `
  width: 33.33%;
  text-align: center;
  padding: 4px 0;
`

const Image = styled.div `
  height: ${props => props.height + 'px'};
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`

const HomePage = () => {
  return (
    <DefaultLayout fixedHeader>
      <ClearFix />
      <StyledBannerSection>
        <CarouselContainer>
          <Carousel  arrows>
            <Link to='p1'><Image height={300} url={banner1}/></Link>
            <Link to='p2'><Image height={300} url={banner2}/></Link>
            <Link to='p3'><Image height={300} url={banner3}/></Link>
          </Carousel>
        </CarouselContainer>
        <BannerSectionContainer>
          <BannerImageContainer>
            <Link to='p4'><Image height={149} url={banner1}/></Link>
          </BannerImageContainer>
          <BannerImageContainer >
            <Link to='p5'><Image height={149} url={banner2}/></Link>
          </BannerImageContainer>
        </BannerSectionContainer>
        <StyledBannerFeatureContainer>
          <StyledBannerColumn>15天鑑賞期</StyledBannerColumn>
          <StyledBannerColumn>退貨無負擔</StyledBannerColumn>
          <StyledBannerColumn>假一賠二</StyledBannerColumn>
        </StyledBannerFeatureContainer>
      </StyledBannerSection>
      <Link to='advertise'><Image height={200} url={banner3}/></Link>
    </DefaultLayout>
  )
}

export default HomePage