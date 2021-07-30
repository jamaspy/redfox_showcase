const initialState = {
  tasks: {
    "task-1": {
      id: "task-1",
      icon: "deal",
      name: "James Aspinall",
      jobTitle: "Manager",
      company: "Shakewell Agency",
      number: "0423567498",
      email: "aspin@me.com",
      website: "shakewell.agency",
      address: {
        line1: "17 Brindisi place",
        line2: "",
        suburb: "Avalon Beach",
        city: "Sydney",
        country: "Australia",
        state: "NSW",
      },
      dealValue: "$70,000",
      status: "Deal Done",
    },
    "task-2": { id: "task-2", icon: "call" },
    "task-3": { id: "task-3", icon: "fire" },
    "task-4": { id: "task-4", icon: "clock" },
    "task-5": { id: "task-5", icon: "trash" },
    "task-6": { id: "task-6", icon: "pirate" },
    "task-7": { id: "task-7", icon: "thumbup" },
    "task-8": { id: "task-8", icon: "thumbdown" },
    "task-9": { id: "task-9", icon: "deal" },
    "task-10": { id: "task-10", icon: "call" },
    "task-11": { id: "task-11", icon: "fire" },
    "task-12": { id: "task-12", icon: "clock" },
    "task-13": { id: "task-13", icon: "trash" },
    "task-14": { id: "task-14", icon: "pirate" },
    "task-15": { id: "task-15", icon: "thumbup" },
    "task-16": { id: "task-16", icon: "thumbdown" },
    "task-17": { id: "task-17", icon: "fire" },
    "task-18": { id: "task-18", icon: "deal" },
    "task-19": { id: "task-19", icon: "fire" },
    "task-20": { id: "task-20", icon: "trash" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "01/07/21",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-11",
        "task-12",
        "task-13",
        "task-14",
        "task-15",
        "task-16",
        "task-17",
        "task-18",
        "task-19",
        "task-20",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "08/07/21",
      taskIds: ["task-6", "task-5"],
    },
    "column-3": {
      id: "column-3",
      title: "15/07/21",
      taskIds: ["task-7", "task-8"],
    },
    "column-4": {
      id: "column-4",
      title: "15/07/21",
      taskIds: [],
    },
    "column-5": {
      id: "column-5",
      title: "29/07/21",
      taskIds: ["task-9", "task-10"],
    },
    "column-6": {
      id: "column-6",
      title: "6/08/21",
      taskIds: [],
    },
    "column-7": {
      id: "column-7",
      title: "6/08/21",
      taskIds: [],
    },
    "column-8": {
      id: "column-8",
      title: "6/08/21",
      taskIds: [],
    },
    "column-9": {
      id: "column-9",
      title: "6/08/21",
      taskIds: [],
    },
    "column-10": {
      id: "column-10",
      title: "6/08/21",
      taskIds: [],
    },
    "column-11": {
      id: "column-11",
      title: "6/08/21",
      taskIds: [],
    },
    "column-12": {
      id: "column-12",
      title: "6/08/21",
      taskIds: [],
    },
    "column-13": {
      id: "column-13",
      title: "6/08/21",
      taskIds: [],
    },
    "column-14": {
      id: "column-14",
      title: "6/08/21",
      taskIds: [],
    },
    "column-15": {
      id: "column-15",
      title: "6/08/21",
      taskIds: [],
    },
    "column-16": {
      id: "column-16",
      title: "6/08/21",
      taskIds: [],
    },
    "column-17": {
      id: "column-17",
      title: "6/08/21",
      taskIds: [],
    },
    "column-18": {
      id: "column-18",
      title: "6/08/21",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
    "column-7",
    "column-8",
    "column-9",
    "column-10",
    "column-11",
    "column-12",
    "column-13",
    "column-14",
    "column-15",
    "column-16",
    "column-17",
    "column-18",
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CONTROL_DRAG_STATE":
      return {
        tasks: action.newState.tasks,
        columns: action.newState.columns,
        columnOrder: action.newState.columnOrder,
      };

    case "SET_COLUMN_ID_FOR_NEW_TASK":
      return {
        ...state,
        columnId: action.columnId,
      };

    case "ADD_NEW_TASK":
      return {
        ...state,
        newTask: "",
        tasks: {
          // add to tasks array
          ...state.tasks,
          [action.newId]: { id: action.newId, icon: action.newTaskTitle },
        },
        // add task id at the end of first column
        columns: {
          ...state.columns,
          [action.columnId]: {
            ...state.columns[action.columnId],
            taskIds: [...state.columns[action.columnId].taskIds, action.newId],
          },
        },
      };

    default:
      return state;
  }
};
export default reducer;
