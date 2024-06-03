import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongames.gg">sac@wongames.gg</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav id="social-media">
          <a
            href="http://instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="http://twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="http://youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="http://facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2023 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
