import Footer from '.'
import { render, screen } from 'utils/test-utils'

describe('<Footer />', () => {
  it.each(['contact', 'follow us', 'links', 'location'])(
    'should render %s column',
    (column) => {
      render(<Footer />)
      expect(
        screen.getByRole('heading', { name: new RegExp(column, 'i') })
      ).toBeInTheDocument()
    }
  )
})
