import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    lineColor: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary']
      }
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
Default.args = {
  children: 'Most populars'
}
