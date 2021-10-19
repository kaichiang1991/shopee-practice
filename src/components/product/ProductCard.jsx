import {Card} from 'antd'
import styled, { css } from 'styled-components'
import {HeartOutlined, HeartFilled, StarOutlined, StarFilled} from '@ant-design/icons'
import { nanoid } from 'nanoid'

const SquareImage = styled.div `
  padding-top: 100%;              // 長寬相等
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
`

const ListPrice = styled.span `
  color: red;
  margin-right: 4px;

  ${props => props.salePrice && css`
    text-decoration: line-through;
    color: black;
  `}
`

const SalePrice = styled.span `
  color: red;
`

const StyledFavoriteContainer = styled.div ` 
  margin-top: 8px;
`

const StyledRatingContainer = styled.div `
  /* 多出的字刪節號 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 8px;
  text-align: right;
`

const ProductCard = ({coverUrl, title, listPrice, salePrice, favorite, rating, saleCount}) => {
  
  return (
    <Card
      hoverable
      cover={<SquareImage height={150} src={coverUrl} />}
    >
      <Card.Meta title={title} description={
        <>
          <ListPrice salePrice={salePrice}>${listPrice}</ListPrice>
          <SalePrice>{salePrice? `$${salePrice}`: ''}</SalePrice>
          <StyledFavoriteContainer>
            {/* 愛心 */}
            {favorite? <HeartFilled /> : <HeartOutlined />}
          </StyledFavoriteContainer>
          <StyledRatingContainer>
          {/* 評分 ＋ 購買人數 */}
            {
              Array(5).fill(1).map((_, idx) => idx < rating? <StarFilled key={nanoid()}/>: <StarOutlined key={nanoid()}/>)
            }
            <span> 已售出{saleCount}萬</span>
          </StyledRatingContainer>
        </>
      } />
    </Card>
  )
}

export default ProductCard
