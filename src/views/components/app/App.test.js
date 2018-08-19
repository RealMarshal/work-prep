import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {

  const rendered = shallow(<App />)
  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot()
  })  
})
