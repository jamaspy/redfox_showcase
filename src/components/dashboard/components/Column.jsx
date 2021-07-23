import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  ${tw`flex-1 flex-col m-4 border border-gray-300 rounded-lg`}
`;
const Title = styled.h3`
  ${tw`p-4 text-center font-semibold text-xl`}
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => (props.isDraggingOver ? "#C38737" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

const AddButton = styled.div`
  ${tw`m-auto mt-2 w-8 text-2xl flex justify-center items-center font-semibold h-8 rounded-full p-2 bg-green-700 text-white`}
`;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <AddButton
        onClick={() => alert(`Add New Task To Column ${column.title}`)}
        role="button"
      >
        +
      </AddButton>
      <Title>{column.title}</Title>
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
export default Column;
