export const AppReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_LIST':
            return {
                forms: state.forms.filter(form => {
                    return form.id !== action.payload
                })
            }
        case 'ADD_LIST':
            return {
                forms: [action.payload, ...state.forms]
            }

        default: 
          return state
    }
};