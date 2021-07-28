import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Draggable } from "react-beautiful-dnd";
import { renderIcon } from "../utils";
const Container = styled.div`
  ${tw`border border-gray-300 rounded-full p-4 mb-3 font-semibold shadow-md flex justify-center items-center`}
  background: ${(props) => (props.isDragging ? "#154468" : "white")};
`;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="text-5xl mb-0 text-center">
            {renderIcon(task.content)}
          </p>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
