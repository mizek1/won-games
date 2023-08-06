import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import args from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    floatImage: {
      type: 'string'
    }
  },
  args: { ...args }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
