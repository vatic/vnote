import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from './App.js';

describe('<App/>', function () {
  it('should have a div with class App', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div.container').hasClass('App')).to.equal(true);
  });

  it('should have a div with class main', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div.container').hasClass('main')).to.equal(true);
  });

});