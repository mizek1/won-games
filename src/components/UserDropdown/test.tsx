import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Mizeki" />)
    expect(screen.getByText(/mizeki/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    render(<UserDropdown username="Mizeki" />)
    await userEvent.click(screen.getByText(/mizeki/i))
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
