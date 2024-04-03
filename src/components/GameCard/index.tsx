/* eslint-disable @next/next/no-img-element */
import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Link from 'next/link'
import { Favorite, FavoriteBorder } from 'styled-icons/material-outlined'
import formatPrice from 'utils/format-price'
import * as S from './styles'

export type GameCardProps = {
  id: string
  title: string
  developer: string
  img: string
  price: number
  slug: string
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  id,
  developer,
  img,
  price,
  title,
  promotionalPrice,
  onFav,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
  favorite = false,
  slug
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
