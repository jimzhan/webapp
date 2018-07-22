import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  it('renders root App container', () => {
    const wrapper = shallow(
      <App>
        Application
      </App>,
    )
    expect(wrapper.contains('Application')).toBeTruthy()
  })
})
