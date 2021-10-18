import React from 'react'
import {Link} from 'react-router-dom'
import DefaultLayout from '../components/layout/DefaultLayout'
import ClearFix from '../components/common/ClearFix'
import styled from 'styled-components'
import { Carousel } from 'antd'
import Image from '../components/common/Image'
import banner1 from '../img/banner/banner1.jpg'
import banner2 from '../img/banner/banner2.jpg'
import banner3 from '../img/banner/banner3.jpeg'
import ProductCard from '../components/product/ProductCard'
import product1 from '../img/product/product1.png'

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

const StyledCustomerContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: 48px -4px;

  .product-card{
    width: 100%;
    padding: 4px;
  }
`

const ProductCardContainer = styled.div `
  width: 100%;
  padding: 4px;

  @media (min-width: 576px){
    width: 33.333%;
  }

  @media (min-width: 769px){
    width: 20%;
  }

  .ant-card-body{
    padding: 24px 12px;
  }
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
      <StyledCustomerContainer>
        <ProductCardContainer>
          <Link to='/'>
            <ProductCard title={`產品1`} coverUrl={product1} listPrice={300} salePrice={150} favorite rating={0} saleCount={1.8}/>
          </ Link>
        </ ProductCardContainer>
        <ProductCardContainer>
          <Link to='/'>
            <ProductCard title={`產品2`} coverUrl={banner1} listPrice={300} rating={1} saleCount={1.8}/>
          </ Link>
        </ ProductCardContainer>
        <ProductCardContainer>
          <Link to='/'>
            <ProductCard title={`產品3`} coverUrl={banner2} listPrice={300} salePrice={150} rating={2} saleCount={215}/>
          </ Link>
        </ ProductCardContainer>
        <ProductCardContainer>
          <Link to='/'>
            <ProductCard title={`產品4`} coverUrl={product1} listPrice={300} salePrice={150} rating={3} saleCount={1.8}/>
          </ Link>
        </ ProductCardContainer>
        <ProductCardContainer>
          <Link to='/'>
            <ProductCard title={`產品5`} coverUrl={product1} listPrice={30000} salePrice={15000} rating={4} saleCount={1.8}/>
          </ Link>
        </ ProductCardContainer>
        <ProductCardContainer>
          <Link to='/'>
            <ProductCard title={`產品6`} coverUrl={product1} listPrice={30000} rating={5} saleCount={1.8} />
          </ Link>
        </ ProductCardContainer>
      </StyledCustomerContainer>
    </DefaultLayout>
  )
}

export default HomePage