import React from 'react'
import { BaseLayout } from './layouts'
import Demo from './Demo'

export default ({ children }) => (
  <BaseLayout>
    <Demo />
    {children}
  </BaseLayout>
)
