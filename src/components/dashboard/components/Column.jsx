import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addNewTask, setColumnIdForNewTask } from "../../../store/actions";
const Container = styled.div`
  ${tw`flex-1 flex-col m-2 border border-gray-300 rounded-lg`}
`;
const Title = styled.h3`
  ${tw`p-4 text-center font-semibold text-xl`}
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => (props.isDraggingOver ? "#C38737" : "")};
  flex-grow: 1;
  min-height: 400px;
`;

const AddButton = styled.div`
  ${tw`m-auto mt-2 w-8 text-2xl flex justify-center items-center font-semibold h-8 rounded-full p-2 bg-green-700 text-white`}
`;

const Column = ({
  columns,
  column,
  tasks,
  allState,
  dispatchAddNewTask,
  dispatchSetColumnIdForNewTask,
}) => {
  const [show, setShow] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const toggleShowForm = () => setShow(!show);
  const { id } = column;

  const handleCreateNewTask = () => {
    dispatchAddNewTask(uuidv4(), id, newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <Container>
      <AddButton onClick={toggleShowForm} role="button">
        +
      </AddButton>
      {show && (
        <form className="p-2 text-center">
          <input
            className="border rounded"
            placeholder="enter task"
            name="newtask"
            id="newtask"
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onBlur={(e) => setNewTaskTitle(e.target.value)}
          />
          <button
            className="rounded m-auto bg-yellow-700 p-1 text-xs text-white font-semibold mt-1"
            type="button"
            onClick={handleCreateNewTask}
          >
            Save
          </button>
        </form>
      )}
      <Title className="text-white">{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  allState: state.dashboard,
  columns: state.dashboard.columns,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddNewTask: (newId, columnId, newTaskTitle) =>
    dispatch(addNewTask(newId, columnId, newTaskTitle)),
  dispatchSetColumnIdForNewTask: (newState) =>
    dispatch(setColumnIdForNewTask(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
