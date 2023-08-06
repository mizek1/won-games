/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import { Favorite, FavoriteBorder } from 'styled-icons/material-outlined'
import Button from 'components/Button'
import { AddShoppingCart } from 'styled-icons/material'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  onFav,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
  favorite = false
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small"></Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
