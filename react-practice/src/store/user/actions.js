export const deleteList = (id) => ({
  type: "DELETE_LIST",
  payload: id,
});

export const addList = (form) => ({
  type: "ADD_LIST",
  payload: form,
});
