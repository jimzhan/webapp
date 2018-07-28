import React from 'react'
import { shallow } from 'enzyme'
import App from '@webapp/ui/src/App'


describe('<App />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App>Application</App>)
    expect(wrapper).toBeTruthy()
  })
})
