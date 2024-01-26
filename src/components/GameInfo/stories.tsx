import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mock from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: {
    ...mock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
