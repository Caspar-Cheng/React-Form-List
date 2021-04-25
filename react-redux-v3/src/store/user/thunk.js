import * as action from "./actions";
import api from "../../components/shared/api";

export const fetchForms = (page) => {
  return (dispatch) => {
    dispatch(action.fetchFormsRequest());
    return api
      .get(page)
      .then((res) => {
        dispatch(action.fetchFormsSuccess(res));
        const totalCount = res.headers["x-total-count"];
        return Math.ceil(totalCount / 5);
      })
      .catch((err) => dispatch(action.fetchFormsFailure(err)));
  };
};

export const addForm = (form) => {
  return (dispatch) => {
    dispatch(action.postFormRequest());
    api
      .post(form)
      .then((res) => dispatch(action.postFormSuccess(res)))
      .catch((err) => dispatch(action.postFormFailure(err)));
  };
};

export const deleteForm = (id) => {
  return (dispatch) => {
    dispatch(action.deleteFormRequest());
    api
      .delete(id)
      .then(() => dispatch(action.deleteFormSuccess(id)))
      .catch((err) => dispatch(action.deleteFormFailure(err)));
  };
};

export const updateForm = (form) => {
  return (dispatch) => {
    dispatch(action.putFormRequest());
    api
      .put(form)
      .then((res) => dispatch(action.putFormRequest(res)))
      .catch((err) => dispatch(action.putFormFailure(err)));
  };
};

export const searchForm = (content) => {
  return (dispatch) => {
    dispatch(action.searchFormsRequest());
    api
      .search(content)
      .then((res) => dispatch(action.searchFormsSuccess(res)))
      .catch((err) => dispatch(action.searchFormsFailure(err)));
  };
};

// one way to short share api request code
// const processData = (url, requestType, actionType, form) => {
//   return (dispatch) => {
//     dispatch({ type: `${actionType}_FORMS_REQUEST` });
//     axios({
//       method: requestType,
//       url,
//       data: {
//         ...form,
//       },
//     })
//       .then((res) => {
//         dispatch({
//           type: `${actionType}_FORMS_SUCCESS`,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({ type: `${actionType}_FORMS_FAILURE`, payload: err.message });
//       });
//   };
// };

// export const fetchForms = () => processData(URL, "get", "FETCH", null);
// export const addForm = (form) => processData(URL, "post", "SUBMIT", form);
// export const deleteForm = (id) =>
//   processData(`${URL}/${id}`, "delete", "DELETE", id);
// export const updateForm = (form) =>
//   processData(`${URL}/${form.id}`, "put", "UPDATE", form);
