import Axios from 'axios';
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,
} from '../constants/productConstants';

/**
 * Axios module
 * @module axios
 * @description Axios is a HTTP client, uses async and await to get HTTP requests and response management from backend
 * @param {async} - returns a PROMISE element, when returns a value, PROMISE will resolve to the return value
 * @param {await} - await a PROMISE, only can be used inside async fuction 
 * @param {Promise} - represents a value that can be avaliable now, in the future o never
 */

/**
 * @async
 * @function 
 * @name listProducts
 * @param {dispatch} - sends async actions 
 * @description action to list async products
 * @returns an action
 */
export const listProducts = () => async (dispatch) => {
  
  /**
   * @function
   * @name dispatch
   * @param {object} - has a TYPE string with action and PAYLOAD to inject data in begin/end action
   * @description change the state of the redux to show async products
   */

  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    /**
     * @see {@link Axios} for Axios info
     */
    const { data } = await Axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

/**
 * @async
 * @function 
 * @name detailsProduct
 * @param {productId} - id from product
 * @description action to list async product details
 * @returns an action
 */

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
