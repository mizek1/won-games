import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it.each(['contact', 'follow us', 'links', 'location'])(
    'should render %s column',
    (column) => {
      renderWithTheme(<Footer />)
      expect(
        screen.getByRole('heading', { name: new RegExp(column, 'i') })
      ).toBeInTheDocument()
    }
  )
})
