import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CrossSvg from '../../../svg/cross.svg';

import styles from './filter-item.css';

const FilterItem = ({ascending, colName, removeFn}) => (
  <div className={styles.filterItem}>
    <div className={styles.content}>
      {colName} = {ascending? 'Ascending': 'Descending'}
    </div>
    <CrossSvg className={styles.icon} onClick={() => removeFn(colName)}/>
  </div>
)

FilterItem.propTypes = {
  colName: PropTypes.string.isRequired,
  ascending: PropTypes.bool.isRequired,
  removeFn: PropTypes.func.isRequired,
}

export default FilterItem;

