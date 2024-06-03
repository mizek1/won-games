import 'next-image.mock'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import dotenv from 'dotenv'

dotenv.config({
  path: '.env.development'
})

global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate
