import theme from 'styles/theme'

import Heading from '.'
import { render, screen } from 'utils/test-utils'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    render(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': `${theme.font.sizes.medium}`
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      `3rem`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it.each(['primary', 'secondary'] as (keyof typeof theme.colors)[])(
    'should render with a %s line color',
    (color) => {
      render(
        <Heading lineColor={color} lineLeft lineBottom>
          Lorem Ipsum
        </Heading>
      )
      const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
      expect(heading).toHaveStyle({
        'border-left': `0.7rem solid ${theme.colors[color]}`
      })
    }
  )
})
