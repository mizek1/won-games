import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import theme from 'styles/theme'

import Button from '.'
import { render, screen } from 'utils/test-utils'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
      'font-size': `${theme.font.sizes.small}`
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': `${theme.font.sizes.xsmall}`
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
      'font-size': `${theme.font.sizes.medium}`
    })
  })

  it('should render a full width version', () => {
    render(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button minimal icon={<AddShoppingCart data-testid="icon" />}>
        Buy now
      </Button>
    )
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none'
    })
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      color: theme.colors.primary
    })
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
