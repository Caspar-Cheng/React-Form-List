const INITIAL_STATE = {
  forms: [
    {
      select: false,
      id: 1,
      description: "For test purpose",
      category: "css",
      content: "test",
    },
    {
      select: false,
      id: 2,
      description: "For test purpose aaa",
      category: "css",
      content: "test",
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DELETE_LIST":
      return {
        forms: state.forms.filter((form) => {
          return form.id !== action.payload;
        }),
      };
    case "ADD_LIST":
      return {
        forms: [...state.forms, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
