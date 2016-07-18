import { actionTypes as t } from '../actions/messages';
import { findIndex, filter } from 'lodash';
// define initial state shape
const initObj = {
  isFetching: false,
  messages: [],
  error: null,
  filters: [],
};

// update is not a side effecting method. It creates a new instance of the object
function messages(state = initObj, action) {
  switch (action.type) {
    case t.getMessages_get: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case t.getMessages_success: {
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
        error: null,
      };
    }
    case t.getMessages_failure: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    case t.getMessages_filterToggle: {
      const filterIndex = findIndex(state.filters, ({ colName }) => colName === action.payload);
      let newFilters;
      if (filterIndex !== -1) {
        const filterObj = {
          ...state.filters[filterIndex],
          ascending: !state.filters[filterIndex].ascending,
        };
        newFilters = [
          ...state.filters.slice(0, filterIndex),
          filterObj,
          ...state.filters.slice(filterIndex + 1),
        ];
      } else {
        newFilters = [
          ...state.filters,
          { colName: action.payload, ascending: true },
        ];
      }

      return {
        ...state,
        filters: newFilters,
      };
    }
    case t.getMessages_filterDelete: {
      return {
        ...state,
        filters: filter(state.filters, ({ colName }) => colName !== action.payload),
      };
    }
    case '@@router/LOCATION_CHANGE': {
      return initObj;
    }
    case t.getMessages_clear: {
      return initObj;
    }
    default: {
      return state;
    }
  }
}


export default messages;

