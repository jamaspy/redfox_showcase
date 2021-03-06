export const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
    "task-5": { id: "task-5", content: "Mow the lawn" },
    "task-6": { id: "task-6", content: "Walk the dog" },
    "task-7": { id: "task-7", content: "Hoover the stairs" },
    "task-8": { id: "task-8", content: "Load the dishwasher" },
    "task-9": { id: "task-9", content: "Sweep the yard" },
    "task-10": { id: "task-10", content: "Watch Xmen" },
    "task-11": { id: "task-11", content: "Take out the garbage" },
    "task-12": { id: "task-12", content: "Watch my favorite show" },
    "task-13": { id: "task-13", content: "Charge my phone" },
    "task-14": { id: "task-14", content: "Cook dinner" },
    "task-15": { id: "task-15", content: "Mow the lawn" },
    "task-16": { id: "task-16", content: "Walk the dog" },
    "task-17": { id: "task-17", content: "Hoover the stairs" },
    "task-18": { id: "task-18", content: "Load the dishwasher" },
    "task-19": { id: "task-19", content: "Sweep the yard" },
    "task-20": { id: "task-20", content: "Watch Xmen" },
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
  },
  // Facilitate reordering of the columns
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};
