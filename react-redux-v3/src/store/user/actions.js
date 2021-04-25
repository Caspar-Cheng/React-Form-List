import * as actionNames from "./constants";

export const fetchFormsRequest = () => ({
  type: actionNames.FETCH_FORMS_REQUEST,
});

export const fetchFormsSuccess = (res) => ({
  type: actionNames.FETCH_FORMS_SUCCESS,
  payload: res.data,
});

export const fetchFormsFailure = (error) => ({
  type: actionNames.FETCH_FORMS_FAILURE,
  payload: error,
});

export const postFormRequest = () => ({
  type: actionNames.SUBMIT_FORMS_REQUEST,
});

export const postFormSuccess = (res) => ({
  type: actionNames.SUBMIT_FORMS_SUCCESS,
  payload: res.data,
});

export const postFormFailure = (error) => ({
  type: actionNames.SUBMIT_FORMS_FAILURE,
  payload: error,
});

export const deleteFormRequest = () => ({
  type: actionNames.DELETE_FORMS_REQUEST,
});

export const deleteFormSuccess = (id) => ({
  type: actionNames.DELETE_FORMS_SUCCESS,
  payload: id,
});

export const deleteFormFailure = (error) => ({
  type: actionNames.DELETE_FORMS_FAILURE,
  payload: error,
});

export const putFormRequest = () => ({
  type: actionNames.UPDATE_FORMS_REQUEST,
});

export const putFormSuccess = (form) => ({
  type: actionNames.UPDATE_FORMS_SUCCESS,
  payload: form,
});

export const putFormFailure = (error) => ({
  type: actionNames.UPDATE_FORMS_FAILURE,
  payload: error,
});

export const searchFormsRequest = () => ({
  type: actionNames.SEARCH_FORMS_REQUEST,
});

export const searchFormsSuccess = (res) => ({
  type: actionNames.SEARCH_FORMS_SUCCESS,
  payload: res.data,
});

export const searchFormsFailure = (error) => ({
  type: actionNames.SEARCH_FORMS_FAILURE,
  payload: error,
});
