import * as actions from "./constants";

const INITIAL_STATE = {
  status: "idle",
  forms: [],
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_FORMS_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case actions.FETCH_FORMS_SUCCESS:
      return {
        status: "success",
        forms: action.payload,
        error: "",
      };
    case actions.FETCH_FORMS_FAILURE:
      return {
        status: "failure",
        forms: [],
        error: action.payload,
      };
    case actions.SUBMIT_FORMS_REQUEST:
      return {
        ...state,
        status: "submitting",
      };
    case actions.SUBMIT_FORMS_SUCCESS:
      return {
        status: "success",
        forms: [action.payload, ...state.forms],
        error: "",
      };
    case actions.SUBMIT_FORMS_FAILURE:
      return {
        status: "failure",
        forms: [...state],
        error: action.payload,
      };
    case actions.DELETE_FORMS_REQUEST:
      return {
        ...state,
        status: "deleting",
      };
    case actions.DELETE_FORMS_SUCCESS:
      return {
        status: "success",
        forms: state.forms.filter((form) => {
          return form.id !== action.payload;
        }),
        error: "",
      };
    case actions.DELETE_FORMS_FAILURE:
      return {
        status: "failure",
        forms: [...state],
        error: action.payload,
      };
    case actions.UPDATE_FORMS_REQUEST:
      return {
        ...state,
        status: "updating",
      };
    case actions.UPDATE_FORMS_SUCCESS:
      return {
        status: "success",
        forms: [...state.forms, action.payload],
        error: "",
      };
    case actions.UPDATE_FORMS_FAILURE:
      return {
        status: "failure",
        forms: [...state],
        error: action.payload,
      };
    case actions.SEARCH_FORMS_REQUEST:
      return {
        ...state,
        status: "searching",
      };
    case actions.SEARCH_FORMS_SUCCESS:
      return {
        status: "success",
        forms: action.payload,
        error: "",
      };
    case actions.SEARCH_FORMS_FAILURE:
      return {
        status: "failure",
        forms: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case DELETE_LIST:
//       return {
//         forms: state.forms.filter((form) => {
//           return form.id !== action.payload;
//         }),
//       };
//     case ADD_LIST:
//       return {
//         forms: [...state.forms, action.payload],
//       };
//     default:
//       return state;
//   }
// };
