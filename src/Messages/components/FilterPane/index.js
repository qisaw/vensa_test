import React, { PropTypes } from 'react';

import styles from './filter-pane.css';
import FilterItem from '../FilterItem';
import { filterPropType } from '../../utils';

const FilterPane = ({ filters, removeFn }) => {
  const items = filters.map(
    ({ ascending, colName }, i) =>
      <FilterItem key={i} ascending={ascending} colName={colName} removeFn={removeFn} />
  );
  return (
    <div className={styles.filterPane}>
      <div>Filter and Sort:</div>
      {items}
    </div>
  );
};

FilterPane.propTypes = {
  filters: PropTypes.arrayOf(filterPropType).isRequired,
  removeFn: PropTypes.func.isRequired,
};

export default FilterPane;
export {
  styles,
};
