import { Meta, Story } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />
WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
