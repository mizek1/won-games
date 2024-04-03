import Ribbon from '.'
import { render, screen } from 'utils/test-utils'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = render(<Ribbon>Bestseller</Ribbon>)
    expect(screen.getByText(/bestseller/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with the primary color', () => {
    render(<Ribbon>Bestseller</Ribbon>)
    expect(screen.getByText(/bestseller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Bestseller</Ribbon>)
    expect(screen.getByText(/bestseller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
  it('should render with the normal size as default', () => {
    render(<Ribbon>Bestseller</Ribbon>)
    expect(screen.getByText(/bestseller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })
  it('should render with the small size', () => {
    render(<Ribbon size="small">Bestseller</Ribbon>)
    expect(screen.getByText(/bestseller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
