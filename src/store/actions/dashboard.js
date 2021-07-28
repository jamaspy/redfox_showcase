export const controlDragState = (newState) => (dispatch, getState) => {
  console.log("TESTY action", newState);
  dispatch({
    type: "CONTROL_DRAG_STATE",
    newState,
  });
};

export const setColumnIdForNewTask = (columnId) => (dispatch, getState) => {
  dispatch({
    type: "SET_COLUMN_ID_FOR_NEW_TASK",
    columnId,
  });
};

export const addNewTask =
  (newId, columnId, newTaskTitle) => (dispatch, getState) => {
    console.log(newId, columnId, newTaskTitle);
    dispatch({
      type: "ADD_NEW_TASK",
      newId,
      columnId,
      newTaskTitle,
    });
  };
