import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

chai.use(dirtyChai);

describe('it should work', () => {
  it('should be true', () => {
    expect(true).to.equal(true);
  });
});
