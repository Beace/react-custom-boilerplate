/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'antd';

import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />,
    );
    expect(renderedComponent.contains(<Button />)).toEqual(true);
  });
});
