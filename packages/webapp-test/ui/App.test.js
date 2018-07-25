import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import App from '@webapp/ui/src/App'

test('<App />', (t) => {
  const wrapper = shallow(
    <App>
      Application
    </App>,
  )
  t.pass(wrapper)
})
