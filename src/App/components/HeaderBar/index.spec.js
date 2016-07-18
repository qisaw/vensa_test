import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import HeaderBar, { styles } from './index';

chai.use(dirtyChai);

describe('HeaderBar', () => {
  it('should have the correct classname', () => {
    const element = shallow(<HeaderBar />);
    expect(element.hasClass(styles.headerBar)).to.be.true();
  });
});
