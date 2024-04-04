import userEvent from '@testing-library/user-event'
import { Email } from 'styled-icons/material-outlined'
import { render, screen, waitFor } from 'utils/test-utils'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="Label" name="field" id="field" />)
    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })
  it('should render without label', () => {
    render(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
  it('should render with placeholder', () => {
    render(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })
  it('should change its value when typing', async () => {
    const onInput = jest.fn()
    render(
      <TextField onInputChange={onInput} label="textfield" name="textfield" />
    )
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    await userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })
  it('should be accessible by tab', async () => {
    render(<TextField label="textfield" name="textfield" />)
    const input = screen.getByLabelText('textfield')
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(input).toHaveFocus()
  })
  it('should render with icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render with icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })
  it('should not change its value when disabled', async () => {
    const onInput = jest.fn()
    render(
      <TextField
        onInputChange={onInput}
        label="textfield"
        name="textfield"
        disabled
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const text = 'This is my new text'
    await userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })
  it('should not be accessible by tab when disabled', async () => {
    render(<TextField label="textfield" name="textfield" disabled />)
    const input = screen.getByLabelText('textfield')
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(input).not.toHaveFocus()
  })
  it('should render with error', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="textfield"
        name="textfield"
        error="Error message"
      />
    )
    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
