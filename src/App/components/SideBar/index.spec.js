import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import SideBar, { styles } from './index';

chai.use(dirtyChai);

describe('SideBar', ()=> {
  it('should have the correct classname', () => {
    const element = shallow(<SideBar/>);
    expect(element.hasClass(styles.sideBar)).to.be.true();
  })
})
