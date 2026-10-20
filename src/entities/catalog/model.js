import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { catalogApi } from '../../shared/api/catalogApi';

const initialState = {
  number: '',
  brands: [],
  offers: [],
  selectedBrand: '',
  status: 'idle',
  error: '',
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'catalog/brandsPending':
      return {
        ...state,
        number: action.payload,
        brands: [],
        offers: [],
        selectedBrand: '',
        status: 'brandsLoading',
        error: '',
      };
    case 'catalog/brandsFulfilled':
      return { ...state, brands: action.payload, status: 'brandsReady' };
    case 'catalog/offersPending':
      return {
        ...state,
        selectedBrand: action.payload,
        offers: [],
        status: 'offersLoading',
        error: '',
      };
    case 'catalog/offersFulfilled':
      return { ...state, offers: action.payload, status: 'offersReady' };
    case 'catalog/requestRejected':
      return { ...state, status: 'error', error: action.payload };
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({ catalog: catalogReducer }),
  applyMiddleware(thunk),
);

export const searchBrands = (number) => async (dispatch) => {
  dispatch({ type: 'catalog/brandsPending', payload: number });

  try {
    const brands = await catalogApi.findBrands(number);
    dispatch({ type: 'catalog/brandsFulfilled', payload: brands });
  } catch (error) {
    dispatch({ type: 'catalog/requestRejected', payload: error.message });
  }
};

export const searchOffers = (number, brand) => async (dispatch) => {
  dispatch({ type: 'catalog/offersPending', payload: brand });

  try {
    const offers = await catalogApi.findOffers(number, brand);
    dispatch({ type: 'catalog/offersFulfilled', payload: offers });
  } catch (error) {
    dispatch({ type: 'catalog/requestRejected', payload: error.message });
  }
};
